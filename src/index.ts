import express, { Request, Response, request } from "express";
import * as dotenv from "dotenv";
import { crimesRoutes } from "./routes/crimes.routes";
import { criminosoRoutes } from "./routes/criminoso.routes";
import { armaRoutes } from "./routes/arma.routes";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT;
// criando o crime
app.get("/", (req: Request, res: Response) => {
  res.sendStatus(200);
});
app.use("/crimes", crimesRoutes());
// criando o criminoso
app.use("/criminoso", criminosoRoutes());
// criando arma
app.use("/arma", armaRoutes());
app.listen(port, () => {
  console.log(`Server running on port:${port}`);
});

// app.get("/", async (req: Request, res: Response) => {
//   const criminoso = await repository.criminoso.findMany({
//     include: {
//       crimes: true,
//       armas: true,
//     },
//   });
//   return res
//     .status(200)
//     .send({ success: true, message: "API - Delegacia", data: criminoso });
// });

// //criando criminoso

// app.post("/criminoso", async (req: Request, res: Response) => {
//   const { nomeCompleto, cpf } = req.body;

//   const criminoso = await repository.criminoso.create({
//     data: { nomeCompleto, cpf, dtAtuali: new Date() },
//   });
//   res.json(criminoso);
// });

// //criando o crime

// app.post("/crime", async (req: Request, res: Response) => {
//   const { name, criminoso_id } = req.body;

//   const crime = await repository.crimes.create({
//     data: { name, criminoso_id },
//   });
//   res.json(crime);
// });

// /// pegando todos os criminosos

// app.get("/criminoso", async (req: Request, res: Response) => {
//   const criminoso = await repository.criminoso.findMany({
//     include: {
//       crimes: true,
//       armas: true,
//     },
//   });
//   res.json(criminoso);
// });

// //criando arma

// app.post("/arma", async (req: Request, res: Response) => {
//   const { nome, criminoso_id, crimes_id } = req.body;

//   const armas = await repository.armas.create({
//     data: { nome, criminoso_id, crimes_id },
//   });
//   res.json(armas);
// });

// //editando arma
// app.put("/arma/:id", async (req: Request, res: Response) => {
//   const { nome } = req.body;
//   const { id } = req.params;
//   const novoNome = await repository.armas.update({
//     where: { id },
//     data: { nome },
//   });
//   res.json(novoNome);
// });

// // deletando uma arma

// app.delete("/arma/:id", async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const armaDeletada = await repository.armas.delete({
//     where: { id },
//   });
//   res.json(armaDeletada);
// });
