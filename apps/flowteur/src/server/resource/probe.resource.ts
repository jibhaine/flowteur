import { Router } from 'express';

export class ProbeResource {
  constructor(private router: Router) {
    router.get('/{file}/probe', (req, resp) => {
      console.log(req);
    });
  }
  build(): any {
    return this.router;
  }
}
