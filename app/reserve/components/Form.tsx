export default function Form() {
  return (
    <div className="mt-10 flex flex-wrap justify-between w-[660px]">
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="First Name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Last Name"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Phone Number"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="E-mail"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Occasion(optional)"
      />
      <input
        type="text"
        className="border rounded p-3 w-80 mb-4"
        placeholder="Requests (optional)"
      />
      <button className="bg-red-600 w-full p-3 text-white font-bold rounded disabled:bg-gray-300">
        Complete resevation
      </button>
    </div>
  );
}
