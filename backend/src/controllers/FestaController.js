const connection = require('../database/connection');

module.exports = {
    async create(request, response){
         const {nome , convidados , motivoFesta, horaFesta} = request.body;

         const id = null;
         const id_contratante = request.headers.contratante;
         const [nmContratante]  = await connection('contratante').where('id', id_contratante).select('nome');
         const nome_contratante = nmContratante.nome;

             await connection('festa').insert({
                id,
                nome,
                convidados,
                motivoFesta,
                horaFesta,
                id_contratante,
                nome_contratante
            });

          return response.json({ nome });
    },


    async update(request, response){
        const {convidados , horaFesta} = request.body;
        const {id} = request.params;
       
        await connection('festa').where('id', id).update({
               convidados : convidados,
               horaFesta : horaFesta,
           });

           return response.json("Dados atualizados");
   },

    async index (request, response) {
         const festas = await connection('festa').select('*');
     
         return response.json(festas);
     },

     async delete (request, response) {
         const { id } = request.params;
         await connection('festa').where('id', id).delete();
         return response.status(204).send();

     }

};