// src/index.d.ts

declare module "@babycommando/entity-db" {
  export class EntityDB {
    constructor(config: { vectorPath: string; model?: string });

    insert(data: { [key: string]: any }): Promise<number>;
    insertBinary(data: { [key: string]: any }): Promise<number>;
    insertManualVectors(data: { [key: string]: any }): Promise<number>;

    update(key: number, data: { [key: string]: any }): Promise<void>;
    delete(key: number): Promise<void>;
    deleteAll(): Promise<void>;

    query(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryBinary(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryBinarySIMD(
      queryText: string,
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;

    queryManualVectors(
      queryVector: number[],
      options?: { limit?: number }
    ): Promise<{ [key: string]: any }[]>;
  }
}
