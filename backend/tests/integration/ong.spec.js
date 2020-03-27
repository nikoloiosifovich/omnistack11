const req = require("supertest");
const app = require("../../src/app");
const connection = require("../../src/database/connection");

describe("ONG Unique ID", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should be able to create a new ONG", async () => {
    const res = await req(app)
      .post("/ongs")
      .send({
        name: "Pata Amada",
        email: "contato@pataamada.com.br",
        whatsapp: "5582996089873",
        city: "Maceió",
        uf: "AL"
      });

    expect(res.body).toHaveProperty("id");
    expect(res.body.id).toHaveLength(8);
  });
});
