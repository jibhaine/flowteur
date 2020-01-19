import 'reflect-metadata';

// class decorators
export function Path<T extends {new(...args: any[]): {}}>(constructor: T) {
  console.log(`Path() evaluated : ${constructor}`);
  return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
  };
}

export function ResourcePath<T extends {new(...args: any[]): {}}>(constructor: T) {
  console.log(`Path() evaluated : ${constructor}`);
  return class extends constructor {
      newProperty = 'new property';
      hello = 'override';
  };
}

// property decorators
const pathParamMetadataKey = Symbol('PathParam');

export function PathParam(target: Object, propertyKey: string | symbol, parameterIndex: number)  {
  console.log('PathParam', Reflect.getOwnMetadata(pathParamMetadataKey, target, propertyKey) );
}
export function BodyParam(value) {
  console.log(`GET() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`GET() called : ${target} `);
  };
}

export function RequestParam(value) {
  console.log(`GET() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`GET() called : ${target} `);
  };
}
export function HttpMethod(value) {
  console.log(`GET() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`GET() called : ${target} `);
  };
}

export function GET(value) {
  console.log(`GET() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`GET() called : ${target} `);
  };
}

export function POST(value) {
  console.log(`POST() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`POST() called : ${target} `);
  };
}

export function PUT(value) {
  console.log(`PUT() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`PUT() called : ${target} `);
  };
}

export function OPTIONS(value) {
  console.log(`OPTIONS() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`OPTIONS() called : ${target} `);
  };
}

export function DELETE(value) {
  console.log(`DELETE() evaluated : ${value}`);
  return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
      console.log(`DELETE() called : ${target} `);
  };
}
