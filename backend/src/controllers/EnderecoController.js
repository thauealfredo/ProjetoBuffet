const connection = require('../database/connection');

module.exports = {
    async create(request, response) {
        const { logradouro, bairro, cidade, uf } = request.body;

        const id_contratante = request.headers.contratante;

        await connection('endereco').insert({
            id_contratante,
            logradouro,
            bairro,
            cidade,
            uf
        });

        return response.json({ logradouro, bairro, cidade, uf });
    },

    async index(request, response) {
        const enderecos = await connection('endereco').select('*');

        return response.json(enderecos);
    },

    async delete(request, response) {
        const { id } = request.params;
        await connection('endereco').where('id_contratante', id).delete();
        return response.status(204).send();

    },

    async update(request, response) {

        const { id } = request.params;
        const { logradouro, bairro, cidade, uf } = request.body;

        await connection('endereco').where('id_contratante', id).update({
                logradouro: logradouro,
                bairro: bairro,
                cidade: cidade,
                uf: uf
            });
            return response.json({ logradouro, bairro, cidade, uf });
    }
};