export function handleFormInput(state, action) {
  switch (action.type) {
    case "ADD":
      const temp = state;
      temp[action.field] = action.value;
      return { ...temp };
    default:
      return state;
  }
}
