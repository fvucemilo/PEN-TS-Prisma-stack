import bcrypt from 'bcryptjs';

export const encryptPassword = async (password: string) => {
  return bcrypt.hash(password, 8);
};

export const isPasswordMatch = async (password: string, userPassword: string) => {
  return bcrypt.compare(password, userPassword);
};
