import { DocumentDefinition } from 'mongoose';
import UserModel, { UserDocument } from '../models/user.models';

export async function createuser(
  input: DocumentDefinition<
    Omit<UserDocument, 'createdAt' | 'updatedAt' | 'comparePassword'>
  >
) {
  try {
    return await UserModel.create(input);
  } catch (e: any) {
    throw new Error(e);
  }
}
