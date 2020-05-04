import React from "react";
import { useInput } from "../../hooks/useInput";
import { useFirebase } from "../../firebase/FirebaseContext";
import { v4 as uuid } from "uuid";
import "./AddProductForm.scss";

export const AddProductForm = () => {
  const [name, setName, resetName] = useInput();
  const [tagline, setTagline, resetTagline] = useInput();
  const [desc, setDesc, resetDesc] = useInput();
  const [price, setPrice, resetPrice] = useInput();

  const firebase = useFirebase();

  const resetForm = () => {
    resetName();
    resetTagline();
    resetDesc();
    resetPrice();
  };

  const handleSubmit = (e) => {
    //Handle submit
    // Still need to add some missing fields to the form
    e.preventDefault();
    const newItem = {
      id: uuid(),
      name,
      tagline,
      desc,
      price,
    };
    firebase.products().push(newItem, () => {
      console.log("Product Saved");
    });
    resetForm();
  };

  // export default function SaveScoreForm({ score, scoreSaved }) {
  //   const [username, setUsername] = useState("");
  //   const firebase = useFirebase();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const record = {
  //       username,
  //       score,
  //     };
  //     setUsername("");
  //     firebase.scores().push(record, () => {
  //       console.log("Record Saved");
  //       scoreSaved();
  //     });
  //   };

  // {
  //   id: "6457c08f-321a-4ef0-a5cc-913b9c38a221",
  //   category: "shoes",
  //   name: "Nike Air Force One",
  //   tagline: "Stylish Street Shoe",
  //   desc:
  //     "Laborum commodo excepteur in non eu proident laborum.Eu id pariatur qui aliquip reprehenderit sit fugiat ex.",
  //   price: 59.99,
  //   imgUrl: "/static/sample-1.jpg",
  // }

  return (
    <div className="AddProductForm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">name:</label>
        <input
          required
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <label htmlFor="tagline">tagline:</label>
        <input
          required
          type="text"
          name="tagline"
          value={tagline}
          onChange={(e) => setTagline(e.currentTarget.value)}
        />

        <label htmlFor="price">price:</label>
        <input
          required
          type="number"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.currentTarget.value)}
        />

        <label htmlFor="desc">description:</label>
        <textarea
          required
          name="desc"
          value={desc}
          onChange={(e) => setDesc(e.currentTarget.value)}
        ></textarea>

        <button className="submitButton" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
