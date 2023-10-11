import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Link from "next/link";
import ClearIcon from "@mui/icons-material/Clear";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import axios from "axios";

function NewPost() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const form = useRef();

  const submit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("category", selectedCategory);
    formData.append("color", e.target.color.value);
    formData.append("title", e.target.title.value);
    formData.append("price", e.target.price.value);
    formData.append("description", e.target.description.value);

    for (const image of images) {
      formData.append("image", image);
    }

    try {
      const response = await axios.post(
        "http://localhost:3001/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        console.log("Image uploaded successfully");
      } else {
        console.error("Image upload failed");
      }
    } catch (error) {
      console.error("Error uploading image", error);
    }
  };

  const handleImageChange = (e) => {
    const files = e.target.files;
    const fileArray = Array.from(files);
    setImages(fileArray);
  };

  const deleteImage = (ind) => {
    const filterImages = images.filter((_, index) => index !== ind);
    setImages(filterImages);
  };

  return (
    <div className="flex newpost flex-col items-center bg-[#F8F9FD] pb-[60px] ">
      <div className="flex w-full items-center gap-[20px] justify-start">
        <div className="flex relative h-[40px] w-full justify-center bg-[transform] items-center">
          <Link href="/">
            <ArrowBackIcon
              className="absolute top-2 left-2"
              fontSize="medium"
            />
          </Link>
          <h1 className="text-xl">Yeni elan əlavə et</h1>
        </div>
      </div>
      <div className="w-[80%] max-[600px]:w-[100%] noscroll h-[100%] gap-[20px] bg-[#F8F9FD] pt-[40px] grid grid-cols-1 justify-center place-items-center">
        <form
          ref={form}
          onSubmit={submit}
          encType="multipart/form-data"
          className="w-[80%] max-[600px]:w-[100%] noscroll h-[100%] gap-[20px] bg-[#F8F9FD] pt-[40px] grid grid-cols-1 justify-center place-items-center"
        >
          <select
            name="category"
            onChange={(e) => {
              setSelectedCategory(e.currentTarget.value);
            }}
            className="w-[80%] outline-none border-0 text-[#a9a9a9] h-[30px] pl-2"
          >
            <option value="">Select a category</option>
            <option value="Telefon">Telefon</option>
            <option value="Komputer">Komputer</option>
            <option value="Televizor">Televizor</option>
            <option value="Akksesuar">Akksesuar</option>
          </select>
          <select
            name="color"
            className="w-[80%] outline-none border-0 text-[#a9a9a9] h-[30px] pl-2"
          >
            <option value="" disabled selected>
              Select a color
            </option>
            <option value="Red">Red</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
            <option value="Yellow">Yellow</option>
          </select>
          <input
            type="text"
            name="title"
            placeholder="Elan basligi"
            className="w-[80%] outline-none border-0 h-[30px] pl-2"
          ></input>
          <input
            type="text"
            name="price"
            placeholder="Qiymet"
            className="w-[80%] outline-none border-0 h-[30px] pl-2"
          ></input>
          <textarea
            name="description"
            placeholder="description"
            className="w-[80%] outline-none border-0 textarea pl-2"
          ></textarea>
          <label
            htmlFor="fileInput"
            className="w-[80%] h-[35px] gap-[10px] bg-white flex items-center justify-center text-blue-600 font-bold"
          >
            <InsertPhotoIcon />
            <h1>Şəkil seç</h1>
            <input
              type="file"
              id="fileInput"
              multiple
              className="hidden"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
            />
          </label>
          <div className="w-[80%] flex gap-[20px]">
            {images.map((image, index) => (
              <div className="photo" key={index}>
                <img
                  src={URL.createObjectURL(image)}
                  className="photosrc"
                  alt={`Image ${index}`}
                />
                <ClearIcon
                  onClick={() => {
                    deleteImage(index);
                  }}
                  className="icon"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="w-[80%] bg-red-600 h-[40px] text-white"
          >
            Paylas
          </button>
        </form>
      </div>
    </div>
  );
}

export default NewPost;
