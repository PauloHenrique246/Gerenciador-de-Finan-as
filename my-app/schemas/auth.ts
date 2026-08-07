import * as z from "zod"; 
 
export const loginSchema = z.object({ 
  email: z.email(),
  senha: z.string().min(4).max(20)
});
