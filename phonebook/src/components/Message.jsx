const Message = ({ message }) => {
  let text = message.text;
  let isError = message.isError;

  let display;
  if (isError) {
    display = {
      borderColor: 'red',
      backgroundColor: "rgba(255, 0, 0, 0.568)",
      font: 'bold',
    }
  } else {
    display = {
      borderColor: 'green',
      backgroundColor: "rgba(0, 255, 136, 0.57)",
    }
  }

  return (<h3 style={display}>{text ? text : ''}</h3>);
};

export default Message;