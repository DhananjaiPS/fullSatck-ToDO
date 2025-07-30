
import jwt from "jsonwebtoken";

export function generateToken(data: object) {
  const token = jwt.sign(data, process.env.JWT_SECRET as string);
  return token;
  
}

export function verifyToken(token: string | undefined) {
  if (!token) {
    throw new Error("Token not provided");
  }

  try {
    const data = jwt.verify(token, process.env.JWT_SECRET as string);
    return data;
  } catch (error) {
    throw new Error("Invalid or expired token");
  }
}
