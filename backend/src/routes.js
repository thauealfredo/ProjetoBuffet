const express = require('express');
const { celebrate, Segments, Joi } = require('celebrate');

const ContratanteController = require('./controllers/ContratanteController');
const FestaController = require('./controllers/FestaController');
const ServicoController = require('./controllers/ServicoController');
const EnderecoController = require('./controllers/EnderecoController');

const routes = express.Router();

//#region CONTRATANTE
routes.get('/contratante', ContratanteController.index);

routes.post('/contratante', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        cpf: Joi.string().required().min(11).max(11),
        rg: Joi.string().required().min(9).max(9),
        motivoFesta: Joi.string().required(),
        horaFesta: Joi.date().required()
    })
}), ContratanteController.create);

routes.delete('/contratante/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), ContratanteController.delete);
//#endregion


//#region ENDEREÇO
routes.get('/enderecos', EnderecoController.index);

// create
routes.post('/endereco', celebrate({
    [Segments.BODY]: Joi.object().keys({
        logradouro: Joi.string().required(),
        bairro: Joi.string().required(),
        cidade: Joi.string().required(),
        uf: Joi.string().required().min(2).max(2)
    }),
    [Segments.HEADERS]: Joi.object({
        contratante: Joi.number().required(),
    }).unknown(),
}), EnderecoController.create);

routes.delete('/endereco/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), EnderecoController.delete);

/// update
routes.put('/endereco/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        logradouro: Joi.string().required(),
        bairro: Joi.string().required(),
        cidade: Joi.string().required(),
        uf: Joi.string().required().min(2).max(2)
    }),
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
}), EnderecoController.update);
//#endregion


//#region FESTA
routes.get('/festas', FestaController.index);

routes.post('/festa', celebrate({
    [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().required(),
        convidados: Joi.number().min(50).max(300),
        motivoFesta: Joi.string().required(),
        horaFesta: Joi.string().required(),
    }),
    [Segments.HEADERS]: Joi.object().keys({
        contratante: Joi.number().required()
    }).unknown(),
}), FestaController.create);

routes.delete('/festa/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), FestaController.delete);


routes.put('/festa/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    }),
    [Segments.BODY]: Joi.object().keys({
        convidados: Joi.number().min(50).max(300),
        horaFesta: Joi.string().required()
    })
}), FestaController.update);
//#endregion

//#region SERVIÇOS
routes.get('/services', ServicoController.index);

routes.post('/service', celebrate({
    [Segments.BODY]: Joi.object().keys({
        dj: Joi.string().required().min(3).max(3),
        fotografo: Joi.string().required().min(3).max(3),
        bartender: Joi.string().required().min(3).max(3),
        robozao: Joi.string().required().min(3).max(3),
        outros: Joi.string().required().min(3).max(3)
    }),
    [Segments.HEADERS]: Joi.object().keys({
        festa: Joi.number().required()
    }).unknown(),
}), ServicoController.create);

routes.put('/service/:id', celebrate({
    [Segments.BODY]: Joi.object().keys({
        dj: Joi.string().min(3).max(3),
        fotografo: Joi.string().min(3).max(3),
        bartender: Joi.string().min(3).max(3),
        robozao: Joi.string().min(3).max(3),
        outros: Joi.string().min(3).max(3)
    })
}), ServicoController.update);

routes.delete('/service/:id',  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.number().required()
    })
}), ServicoController.delete);

//#endregion


module.exports = routes;