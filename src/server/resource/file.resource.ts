import { Router, Request, Response } from "express";

export class FileResource {
  router: Router;
  constructor(router: Router) {
    router = Router();
    router.get('/file/', (req: Request, res: Response) => {

    });

  }
}
