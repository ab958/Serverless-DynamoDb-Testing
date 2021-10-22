import { savedata, getalldata, deleteVal } from "../functions/CURD/handler";

let body = {
  body: {
    ID: "1234",
    email: "adasda",
  },
};

// test("Entered Correct Body. Event should return 200, with a body Object", async () => {
//   const test = await savedata(body, null, null);
//   expect(test.statusCode).toBe(200);
// });

describe("store data", () => {
  it("Entered Correct Body. Event should return 200, with a body Object", async () => {
    const test = await savedata(body, null, null);
    expect(test.statusCode).toBe(200);
  });
  it("respone must contain email", async () => {
    const test = await savedata(body, null, null);
    expect(test).toContain({
      body: {
        message: {
          ID: "1234",
          email: "adasda",
        },
      },
    });
  });
});

test("Entered Correct Body. Event should return 200, with a body Object", async () => {
  const test = await getalldata(body, null, null);
  expect(test.statusCode).toBe(200);
});

test("Entered Correct Body. Event should return 200, with a body Object", async () => {
  const test = await deleteVal(body, null, null);
  expect(test.statusCode).toBe(200);
});
