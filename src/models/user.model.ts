import { Schema, Document, model } from 'mongoose';

interface User {
  name: string;
  email: string;
}

interface UserModel extends User, Document {}

const userSchema = new Schema<UserModel>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true,lowercase:true },
});

const UserModel = model<UserModel>('User', userSchema);

export { UserModel, User };
