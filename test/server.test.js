const request = require("supertest");

const db = require("../database/dbConfig");

const server = require("../api/server");

describe("End Points Tests", function () {
  beforeAll(async () => {
    await db("users").truncate();
  });
  //Register tests
  it("POST /auth/register", function () {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "testman", password: "test123" })
      .then((res) => {
        expect(res.status).toBe(201);
      });
  });

  it("POST /auth/register", function () {
    return request(server)
      .post("/api/auth/register")
      .send({ username: "testjose", password: "secret123" })
      .then((res) => {
        expect(res.body.username).toBe("testjose");
      });
  });
  //Login Test
  it("POST /auth/login", function () {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "testman", password: "test123" })
      .then((res) => {
        expect(res.status).toBe(200);
      });
  });
  it("POST /auth/login", function () {
    return request(server)
      .post("/api/auth/login")
      .send({ username: "testjose", password: "secret123" })
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });
  //Get Jokes tests
  it("GET /jokes/", function () {
    return request(server)
      .get("/api/jokes/")
      .then((res) => {
        expect(res.type).toBe("application/json");
      });
  });

  it("GET /jokes/", function () {
    return request(server)
      .get("/api/jokes/")
      .then((res) => {
        expect(res.body).toBeDefined();
      });
  });
});
