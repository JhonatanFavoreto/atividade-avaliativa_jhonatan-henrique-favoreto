import dados from "../models/dados.js";
const { teoriasdefilmes } = dados;

const getAllTeoriasdefilmes = (req, res) => {
    let resultado = teoriasdefilmes;

    // FILTROS AQUI

    
    res.status(200).json({
        total: resultado.length,
        data: resultado
    });
}

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



export { getAllTeoriasdefilmes, getTeoriasdefilmesByld };