const promptHandler = () => {
  const output = prompt("Type a number");
  if (!output) {
    alert("Type something");
    return;
  }
  const result = parseInt(output) + 250;
  alert(result.toString());
};
