const Note = ({ note, toggle }) => {
  const lable = note.important ? 'Make not important' : 'Make Important';

  return (
    <li className="note">
      {note.content}
      <button onClick={toggle} >{lable}</button>
    </li>
  );
};

export default Note;