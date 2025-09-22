import dados from "../models/dados.js";
const { teoriasdefilmes } = dados;

const getAllTeoriasdefilmes = (req, res) => {
    let resultado = teoriasdefilmes;

    res.status(200).json({
        total: resultado.length,
        data: resultado,
    });
};

const getTeoriasdefilmesByld = (req, res) => {
    const id = parseInt(req.params.id);
    const teoriadefilme = teoriasdefilmes.find(t => t.id === id);

    if (!teoriadefilme) {
        res.status(404).json({
            success: false,
            message: `Teorias de Filmes não encontradas, ${id}`
        })
    }

    res.status(200).json({
        total: teoriadefilme.length,
        data: teoriadefilme
    })
}

const createTeoriasdefilmes = (req, res) => {
    const { teoria, filme, autor, categoria, evidencias, popularidade, status, dataCriacao } = req.body;

    if (!teoria) {
        return res.status(400).json({
            success: false,
            message: "O campo 'teoria' é obrigatório"
        });
    }

    if (!filme) {
        return res.status(400).json({
            success: false,
            message: "O campo 'filme' é obrigatório"
        });
    }

    if (!autor) {
        return res.status(400).json({
            success: false,
            message: "O campo 'autor' é obrigatório"
        });
    }

    if (!categoria) {
        return res.status(400).json({
            success: false,
            message: "O campo 'categoria' é obrigatório"
        });
    }

    if (!evidencias) {
        return res.status(400).json({
            success: false,
            message: "O campo 'evidencias' é obrigatório"
        });
    }

    if (!popularidade) {
        return res.status(400).json({
            success: false,
            message: "O campo 'popularidade' é obrigatório"
        });
    }

    if (!status) {
        return res.status(400).json({
            success: false,
            message: "O campo 'status' é obrigatório"
        });
    }

    if (!dataCriacao) {
        return res.status(400).json({
            success: false,
            message: "O campo 'popularidade' é obrigatório"
        });
    }


    //Regras de negocio

    if (!statusTeoriasdefilmes.includes(status)) {
        return res.status(400).json({
            success: false,
            message: `O tipo "${status}" não é válido. Tipos de status permitidos: ${statusTeoriasdefilmes.join(", ")}.`
        });
    }

    //Criar uma nova teoria

    const novaTeoria = {
        id: teoriasdefilmes.length + 1,
        teoria: teoria,
        filme,
        autor,
        categoria,
        evidencias,
        popularidade: popularidade,
        status,
        dataCriacao,
    }

    teoriasdefilmes.push(novaTeoria);

    res.status(201).json({
        success: true,
        message: "Nova Teoria Cadastrada com sucesso",
        data: novaTeoria
    })

}

const deleteTeoria = (req, res) => {
    const { id } = req.params

    if (isNaN(id)) {
        return res.status(400).json({
            success: false,
            message: "O id deve ser válido"
        });
    }

    const idParaApagar = parseInt(id);

    const teoriaParaRemover = teoriasdefilmes.find(t => t.id === idParaApagar);
    console.log(teoriaParaRemover)

    if (!teoriaParaRemover) {
        return res.status(404).json({
            success: false,
            message: "O id da teoria não existe"
        });
    }

    const teoriaFiltrada = teoriasdefilmes.filter(t => t.id !== id);
    console.log(teoriaFiltrada)

    teoriasdefilmes.splice(0, teoriasdefilmes.length, ...teoriaFiltrada);

    return res.status(200).json({
        success: true,
        message: "A teoria foi removida com sucesso!"
    })
}

export { getAllTeoriasdefilmes, getTeoriasdefilmesByld, createTeoriasdefilmes, deleteTeoria };