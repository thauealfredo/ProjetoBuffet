const connection = require('../database/connection');

module.exports = {
    async create(request, response){
         const {nome , cpf , rg , motivoFesta, horaFesta} = request.body;

         const id = null;
     
        await connection('contratante').insert({
             id,
             nome,
             cpf,
             rg,
             motivoFesta,
             horaFesta
         });
     
         return response.json({ nome });
    },

    async index (request, response) {
         const contratantes = await connection('contratante').select('*');
     
         return response.json(contratantes);
     },

     async delete (request, response) {
         const { id } = request.params;
         await connection('contratante').where('id', id).delete();
         return response.status(204).send();
         
     }

};