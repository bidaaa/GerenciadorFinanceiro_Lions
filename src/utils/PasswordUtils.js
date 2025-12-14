import bcrypt from 'bcryptjs';

class PasswordUtils {
    
    // Função para transformar "123456" em hash
    async hashPassword(senhaPura) {
        return await bcrypt.hash(senhaPura, 10);
    }

    // Função para checar se a senha bate
    async comparePassword(senhaPura, senhaHash) {
        return await bcrypt.compare(senhaPura, senhaHash);
    }
}

export default new PasswordUtils();