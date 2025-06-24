import { useForm } from "react-hook-form";
import { useState, useEffect, useRef } from "react";
import Table from "./Table";
import { v4 as uuidv4 } from "uuid";

import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const [userForm, setUserForm] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  useEffect(() => {
    const passwords = localStorage.getItem("passwords");
    if (passwords) {
      setUserForm(JSON.parse(passwords));
    }
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
   
    setUserForm([...userForm, { ...data, id: uuidv4() }]);
    localStorage.setItem(
      "passwords",
      JSON.stringify([...userForm, { ...data, id: uuidv4() }])
    );
    reset();
toast("Added...!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
     
    });

    setIsShow(false);
    setIsEdit(false);
  };
  const handleDelete = (id) => {
    if (confirm("Are you sure to delete ?")) {
      setUserForm(userForm.filter((items) => items.id !== id));
      localStorage.setItem(
        "passwords",
        JSON.stringify(userForm.filter((items) => items.id !== id))
      );
      toast("Deleted...!", {
            position: "top-right",
            autoClose: 800,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
           
          });
    }
  };
  const handleEdit = (id) => {
    let item = userForm.filter((item) => item.id === id)[0];
    if (item) {
      setValue("website", item.website);
      setValue("username", item.username);
      setValue("password", item.password);
      setIsEdit(true);
      setUserForm(userForm.filter((item) => item.id !== id));
    }
  };

  return (
    <>
     
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-6 p-8 m-4 bg-gradient-to-b from-[#181a20] to-black rounded-xl shadow-lg border border-[#23263a] w-full max-w-md mx-auto"
      >
        <input
          className="w-full px-5 py-3 rounded-lg bg-[#23263a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          placeholder="Enter Website"
          type="text"
          {...register("website", {
            required: { value: true, message: "This field is must" },
          })}
        />
        {errors.website && (
          <p className="text-center text-xs text-red-500 ">
            {errors.website.message}
          </p>
        )}
        <input
          className="w-full px-5 py-3 rounded-lg bg-[#23263a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          placeholder="Enter Username"
          {...register("username", {
            required: { value: true, message: "This field is must" },
          })}
        />
        {errors.username && (
          <p className="text-center text-xs text-red-500 ">
            {errors.username.message}
          </p>
        )}
        <div className="relative w-full">
          <input
            className="w-full px-5 py-3 rounded-lg bg-[#23263a] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition pr-12"
            placeholder="Enter Password"
            type={isShow ? "text" : "password"}
            {...register("password", {
              required: { value: true, message: "This field is must" },
            })}
          />
          {errors.password && (
            <p className="text-center text-xs text-red-500 ">
              {errors.password.message}
            </p>
          )}
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
            tabIndex={-1}
            onClick={() => setIsShow(!isShow)}
          >
            <lord-icon
              src="https://cdn.lordicon.com/dicvhxpz.json"
              trigger="hover"
              colors="primary:#ffffff,secondary:#ffffff"
            ></lord-icon>
          </button>
        </div>

        <button
          type="submit"
          className="w-1/2 px-5 py-3 rounded-lg bg-green-500 text-white font-semibold cursor-pointer hover:bg-green-600 transition flex justify-center items-center gap-2"
        >
          <lord-icon
            src="https://cdn.lordicon.com/sbnjyzil.json"
            trigger="hover"
            state="hover-swirl"
            colors={"primary:#121331,secondary:#121331"}
          ></lord-icon>
          {isEdit ? "Update" : "Add"}
        </button>
      </form>
      <h2 className="text-center font-bold border-2 py-5 border-green-500 max-w-[80vw] mx-auto my-3 rounded-xl">
        Saved Passwords
      </h2>
      {userForm.length === 0 ? (
        <h3 className="text-center text-xs  text-red-500">
          No saved password yet...
        </h3>
      ) : (
        <Table
          data={userForm}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </>
  );
};

export default Form;
