function handleFormSubmit(event) {
  event.preventDefault();
  console.log('Form was submitted!');
}

export default function Form() {
  return (
    <div>
      <h2>Form Submission onSubmit Event.</h2>
      <form onSubmit={handleFormSubmit}>
        <input placeholder="Enter Something..." /> &nbsp; &nbsp;
        <button>Submit!</button>
      </form>
    </div>
  );
}
