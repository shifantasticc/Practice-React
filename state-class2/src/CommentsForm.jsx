// import { useState } from 'react';
import Comment from './Comment';
import { useFormik } from 'formik';

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = 'Username cannot be empty!';
  }
  return errors;
};

export default function CommentsForm({ addNewComment }) {
  // const [formData, setFormData] = useState({
  //   username: '',
  //   remarks: '',
  //   rating: 5,
  // });

  const formik = useFormik({
    initialValues: {
      username: '',
      remarks: '',
      rating: 5,
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  // let handleInputChange = (event) => {
  //   setFormData((currData) => {
  //     return { ...currData, [event.target.name]: event.target.value };
  //   });
  // };

  // let handleSubmit = (event) => {
  //   console.log(formData);
  //   addNewComment(formData);
  //   event.preventDefault();
  //   setFormData({
  //     username: '',
  //     remarks: '',
  //     rating: 5,
  //   });
  // };

  return (
    <div>
      <h2>Leave a comment</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">Username</label> &nbsp;
        <input
          placeholder="username"
          type="text"
          value={formik.values.username}
          onChange={formik.handleChange}
          id="username"
          name="username"
        />
        {formik.errors.username ? (
          <div style={{ backgroundColor: 'brown', margin: 0 }}>
            {formik.errors.username}
          </div>
        ) : null}
        <br />
        <br />
        <label htmlFor="remarks">Remarks</label> &nbsp;
        <textarea
          placeholder="Add few remarks"
          value={formik.values.remarks}
          onChange={formik.handleChange}
          id="remarks"
          name="remarks"
        ></textarea>
        <br />
        <br />
        <label htmlFor="rating">Rating</label> &nbsp;
        <input
          placeholder="rating"
          type="number"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          id="rating"
          name="rating"
        />
        <br />
        <br />
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}
