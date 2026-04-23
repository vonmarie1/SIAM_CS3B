test("adds numbers correctly", () => {
  expect(2 + 2).toBe(4);
});

test("message is not empty", () => {
  expect("hello").not.toBe("");
});

test("user exists", () => {
  const user = { name: "test" };
  expect(user).toBeDefined();
});

test("login returns true", () => {
  expect(true).toBe(true);
});

test("array has items", () => {
  expect([1,2,3].length).toBeGreaterThan(0);
});

expect(2 + 2).toBe(4); // fixed