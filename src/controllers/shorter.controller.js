import TinyURL from "tinyurl";

export const generateUrl = async (req, res) => {
    try {
        const { link } = req.body;

        if (!link || typeof link !== "string") {
            return res.status(400).json({ error: "O campo 'link' é obrigatório e deve ser uma string válida." });
        }

        const result = await TinyURL.shorten(link);

        if (!result) {
            return res.status(500).json({ error: "Falha ao encurtar a URL." });
        }

        res.json({ link: result });
    } catch (error) {
        res.status(500).json({ error: "Erro ao gerar o link encurtado." });
    }
};
