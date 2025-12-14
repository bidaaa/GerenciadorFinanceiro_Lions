import jwt from 'jsonwebtoken';

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ error: "Token não fornecido" });
    }

    const [, token] = authHeader.split(" ");

    try {
        // AQUI MUDOU: Usa a variável de ambiente
        const secret = process.env.JWT_SECRET;
        
        const decoded = jwt.verify(token, secret);
        
        req.userId = decoded.id;

        return next();
    } catch (error) {
        return res.status(401).json({ error: "Token inválido" });
    }
};