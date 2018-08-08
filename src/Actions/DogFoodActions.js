export function createDogFood(dogFood) {
  return {
    type: "CREATE_DOGFOOD",
    payload: dogFood,
  };
}
