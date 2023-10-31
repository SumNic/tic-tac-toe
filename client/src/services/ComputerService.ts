import { AxiosResponse } from "axios";
import http from "../http";
import { ComputerStep } from "../models/ComputerStep";

export default class ComputerService {
  
    static async stepComputer(data: ComputerStep): Promise<AxiosResponse<ComputerStep>> {
      const resp = await http.post<ComputerStep>("/", JSON.stringify(data))
      return resp
    }

  }