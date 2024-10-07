import { expect, it } from "vitest";

interface User {
  id: number | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  isAdmin: boolean | undefined;
}

/**
 * How do we ensure that defaultUser is of type User
 * at THIS LINE - not further down in the code?
 */
const defaultUser: User = {
  id: 1,
  firstName: "asd",
  lastName: undefined,
  isAdmin: true,
};

const getUserId = (user: User) => {
  return user.id;
};

it("Should get the user id", () => {
  expect(getUserId(defaultUser)).toEqual(1);
});
