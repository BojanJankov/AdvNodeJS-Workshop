import { clientJoiSchema } from "../schemas/client.schema.js";
import { ClientService } from "../services/auth.service.js";

export class ClientController {
  static async getAllClients(req, res) {
    try {
      const clients = await ClientService.getAllClients();

      return res.json(clients);
    } catch (error) {
      return res.status(500).json({ msg: error.message });
    }
  }

  static async registerClient(req, res) {
    try {
      await clientJoiSchema.validateAsync(req.body, { abortEarly: false });

      const registerdClient = await ClientService.registerClient(req.body);

      return res.status(201).json(registerdClient);
    } catch (error) {
      console.log(error);
      return res.status(404).json({ msg: error.message });
    }
  }
}
