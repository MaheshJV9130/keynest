import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Table = ({ data, handleEdit, handleDelete }) => {
  const copyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("✔️ Copied!", {
      position: "top-right",
      autoClose: 1000,
      theme: "dark",
    });
  };

  return (
    <div className="container mx-auto px-4">
      <ToastContainer />

      <table className="w-full text-left text-sm sm:text-base my-6">
        <thead className="bg-[#23263a] text-green-400 max-sm:hidden rounded-t-xl my-2">
          <tr className="grid grid-cols-4 text-center">
            <th className="p-3 font-bold">Website</th>
            <th className="p-3 font-bold">Username</th>
            <th className="p-3 font-bold">Password</th>
            <th className="p-3 font-bold">Action</th>
          </tr>
        </thead>

        <tbody className="flex flex-col gap-4">
          {data.map((form, index) => (
            <tr
              key={index}
              className="grid grid-cols-1 sm:grid-cols-4 bg-[#181a20] text-white border border-[#2f334d] rounded-xl shadow-md transition hover:shadow-lg"
            >
              {/* Website */}
              <td className="flex sm:justify-center items-center gap-2 px-3 py-2 sm:p-4 text-sm sm:text-base">
                <span className="sm:hidden font-semibold w-24 text-gray-400">Website:</span>
                <span className="flex items-center gap-2 break-all">
                  {form.website}
                  <img
                    src="/copy.gif"
                    alt="copy"
                    width={18}
                    className="cursor-pointer hover:scale-110 transition"
                    onClick={() => copyText(form.website)}
                  />
                </span>
              </td>

              {/* Username */}
              <td className="flex sm:justify-center items-center gap-2 px-3 py-2 sm:p-4">
                <span className="sm:hidden font-semibold w-24 text-gray-400">Username:</span>
                <span className="flex items-center gap-2 break-all">
                  {form.username}
                  <img
                    src="/copy.gif"
                    alt="copy"
                    width={18}
                    className="cursor-pointer hover:scale-110 transition"
                    onClick={() => copyText(form.username)}
                  />
                </span>
              </td>

              {/* Password */}
              <td className="flex sm:justify-center items-center gap-2 px-3 py-2 sm:p-4">
                <span className="sm:hidden font-semibold w-24 text-gray-400">Password:</span>
                <span className="flex items-center gap-2 break-all">
                  {form.password}
                  <img
                    src="/copy.gif"
                    alt="copy"
                    width={18}
                    className="cursor-pointer hover:scale-110 transition"
                    onClick={() => copyText(form.password)}
                  />
                </span>
              </td>

              {/* Action */}
              <td className="flex sm:justify-center items-center gap-4 px-3 py-2 sm:p-4">
                <span className="sm:hidden font-semibold w-24 text-gray-400">Action:</span>
                <button onClick={() => handleEdit(form.id)} aria-label="Edit">
                  <img
                    src="/edit.gif"
                    alt="edit"
                    width={18}
                    className="cursor-pointer hover:scale-110 transition"
                  />
                </button>
                <button onClick={() => handleDelete(form.id)} aria-label="Delete">
                  <img
                    src="/delete.gif"
                    alt="delete"
                    width={18}
                    className="cursor-pointer hover:scale-110 transition"
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
