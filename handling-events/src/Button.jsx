function handleClick() {
  console.log('hello!');
}

function handleMouseOver() {
  console.log('Bye!');
}

function handleDoubleClick() {
  console.log('you double clicked!');
}

export default function Button() {
  return (
    <div>
      <h2>Button Click & Hover Event.</h2>
      <p onMouseOver={handleMouseOver}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore non
        officiis nesciunt esse saepe hic ut magnam accusamus aspernatur quae
        necessitatibus nisi, reprehenderit temporibus id quidem distinctio amet
        ab incidunt!
      </p>
      <button onClick={handleClick}>Click me!</button> &nbsp; &nbsp;
      <button onDoubleClick={handleDoubleClick}>double click me!</button>
    </div>
  );
}
