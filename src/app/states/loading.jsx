const loading = () => {
  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
        <p className="mt-3 text-gray-600">Loading...</p>
      </div>
    </div>
  );
};

export default loading;
