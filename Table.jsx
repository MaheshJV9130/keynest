import { ToastContainer, toast } from "react-toastify";

const Table = ({ data, handleEdit, handleDelete }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("✔️ Copied!", {
      position: "top-right",
      autoClose: 800,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
    });
  };

  return (
    <div className="container mx-auto">
      <ToastContainer />
      <table className="text-left w-full text-xs sm:text-base">
        <thead className="bg-black text-white">
          <tr className="text-center">
            <th className="p-4 w-1/4">Website</th>
            <th className="p-4 w-1/4">Username</th>
            <th className="p-4 w-1/4">Password</th>
            <th className="p-4 w-1/4">Action</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100">
          {data.map((form, index) => (
            <tr key={index} className="text-center border-b">
              <td className="p-4 w-1/4 flex justify-center items-center gap-2">
                {form.website}
                <img
                  src="/copy.gif"
                  alt="Copy"
                  width={20}
                  className="cursor-pointer"
                  onClick={() => copyText(form.website)}
                />
              </td>
              <td className="p-4 w-1/4 flex justify-center items-center gap-2">
                {form.username}
                <img
                  src="/copy.gif"
                  alt="Copy"
                  width={20}
                  className="cursor-pointer"
                  onClick={() => copyText(form.username)}
                />
              </td>
              <td className="p-4 w-1/4 flex justify-center items-center gap-2">
                {form.password}
                <img
                  src="/copy.gif"
                  alt="Copy"
                  width={20}
                  className="cursor-pointer"
                  onClick={() => copyText(form.password)}
                />
              </td>
              <td className="p-4 w-1/4 flex justify-center items-center gap-4">
                <button onClick={() => handleEdit(form.id)}>
                  <img
                    src="/edit.gif"
                    alt="Edit"
                    width={20}
                    className="cursor-pointer"
                  />
                </button>
                <button onClick={() => handleDelete(form.id)}>
                  <img
                    src="/delete.gif"
                    alt="Delete"
                    width={20}
                    className="cursor-pointer"
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