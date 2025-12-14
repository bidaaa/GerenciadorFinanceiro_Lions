import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    senha: { type: String, required: true }, // Vai ser criptografada
    criadoEm: { type: Date, default: Date.now }
});

// Exporta o modelo para usarmos nos Services
const User = mongoose.model('User', UserSchema);
export default User;