import { sum } from "../components/sum";

test("should caclculate the sum of two numbers", () => {
  const res = sum(3, 4);

  expect(res).toBe(7);
});
