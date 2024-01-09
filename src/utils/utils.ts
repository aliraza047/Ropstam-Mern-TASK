import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import generator from "generate-password";

const generateRandomPassword = (length: number = 12): string => {
  const password: string = generator.generate({
    length,
    numbers: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  return password;
};

const getEncryptedPassword = async (password: string): Promise<string> => {
  const salt = await bcryptjs.genSalt();
  const hash = await bcryptjs.hash(password, salt);
  return hash;
};

const getJWTToken = async (payload: any): Promise<string> => {
  const token = jwt.sign(payload, process.env.JWT_SECRET || "", {
    expiresIn: "24h",
  });
  return token;
};

export { generateRandomPassword, getJWTToken, getEncryptedPassword };
