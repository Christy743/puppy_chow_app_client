export function createDog(dog) {
  return {
    type: "CREATE_DOG",
    payload: dog,
  };
}
