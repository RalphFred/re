export default function CountryLoad() {
  return (
    <div className="p-5 lg:px-12 py-8 flex flex-col lg:flex-row dark:text-white text-black">
        <div className=" w-full lg:w-[45%] animate-pulse bg-gray-500 h-[250px] lg:h-[400px]"></div>

      <div className="w-[55%] py-8 lg:px-12">
        <div className="w-2/4 mb-8 rounded-sm h-12 bg-gray-500 animate-pulse"></div>
        <div className="w-3/5 rounded-sm mb-4 h-8 bg-gray-500 animate-pulse"></div>
        <div className="w-4/5 rounded-sm mb-4 h-8 bg-gray-500 animate-pulse"></div>
        <div className="w-2/5 rounded-sm mb-4 h-8 bg-gray-500 animate-pulse"></div>
        <div className="w-1/5 rounded-sm mb-4 h-8 bg-gray-500 animate-pulse"></div>
        <div className="w-3/5 rounded-sm mb-4 h-8 bg-gray-500 animate-pulse"></div>
      </div>
    </div>
  );
}
