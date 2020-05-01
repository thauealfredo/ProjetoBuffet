const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { dj, fotografo, bartender, robozao, outros } = request.body;
        const id_festa = request.headers.festa;

        await connection('service').insert({
            id_festa,
            dj,
            fotografo,
            bartender,
            robozao,
            outros
        });

        return response.json({ id_festa });
    },


    async update(request, response) {
        const { dj, fotografo, bartender, robozao, outros } = request.body;
        const id_festa = request.headers.festa;
        const { id } = request.params;

        await connection('service').where("id_festa", id).update({
            dj: dj,
            fotografo: fotografo,
            bartender: bartender,
            robozao: robozao,
            outros: outros
        });

        return response.json("Dados atualizados");
    },

    async index(request, response) {
        const festas = await connection('service').select('*');

        return response.json(festas);
    },

    async delete(request, response) {
        const { id } = request.params;
        await connection('service').where('id_festa', id).delete();
        return response.status(204).send();

    }

};