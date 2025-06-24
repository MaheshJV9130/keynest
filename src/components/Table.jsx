import { ToastContainer, toast } from "react-toastify";
const Table = ({ data, handleEdit, handleDelete }) => {
  function copyText(text) {
    navigator.clipboard.writeText(text);
    toast("✔️ Copied...!", {
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

  return (
    <div className="container mx-auto">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
      <table className="text-left w-full text-xs sm:text-base">
        <thead className="bg-black flex text-white w-full">
          <tr className="flex w-full mb-4 text-center">
            <th className="p-4 w-1/4">Website</th>
            <th className="p-4 w-1/4">Username</th>
            <th className="p-4 w-1/4">Password</th>
            <th className="p-4 w-1/4">Action</th>
          </tr>
        </thead>
        <tbody className="bg-grey-light flex flex-col items-center justify-between overflow-y-scroll w-full">
          {data.map((form, index) => (
            <tr key={index} className="flex w-full mb-4">
              <td className="p-4 w-1/4 flex justify-center items-center text-center">
                {form.website}
                <img
                  src="/copy.gif"
                  alt="copy"
                  width={30}
                  className="invert-100 cursor-pointer"
                  onClick={() => copyText(form.website)}
                />
              </td>
              <td className="p-4 w-1/4 flex justify-center items-center text-center">
                {form.username}
                <img
                  src="/copy.gif"
                  alt="copy"
                  width={30}
                  className="invert-100 cursor-pointer"
                  onClick={() => copyText(form.username)}
                />
              </td>
              <td className="p-4 w-1/4 flex justify-center items-center text-center">
                {form.password}
                <img
                  src="/copy.gif"
                  alt="copy"
                  width={30}
                  className="invert-100 cursor-pointer"
                  aria-label="Copy"
                  onClick={() => copyText(form.password)}
                />
              </td>

              <td className="p-4 w-1/4 flex gap-5 justify-center items-center ">
                <button onClick={()=>handleEdit(form.id)}>
                  <img
                    src="/edit.gif"
                    alt="edit"
                    aria-label="Edit"
                    width={30}
                    className="invert-100 cursor-pointer"
                  />
                </button>
                <button onClick={()=>handleDelete(form.id)}>
                  <img
                    src="/delete.gif"
                    alt="delete"
                    aria-label="Delete"
                    width={30}
                    className="invert-100 cursor-pointer"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
