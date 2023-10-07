import { faker } from "@faker-js/faker";

const TODOS_COUNT = 5;

const todos = Array.from({ length: TODOS_COUNT }, (_, i) => {
  return {
    id: i + 1,
    title: faker.lorem.sentence(),
    completed: faker.datatype.boolean(),
  };
});

export const db = {
  todos,
};
