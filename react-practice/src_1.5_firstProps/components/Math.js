function Math(props) {

  let result;

  switch(props.operator) {
    case '+':
      result = props.num1 + props.num2;
    break;
    case '-':
      result = props.num1 - props.num2;
    break;
    case '*':
      result = props.num1 * props.num2;
    break;
    case '/':
      result = props.num1 / props.num2
    break;
    default:
      return "not an operator"
  };
  return <span>{result}</span>;
}

export default Math;
