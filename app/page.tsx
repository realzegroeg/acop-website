export default function Home() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center justify-between">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        {/* Your main content goes here */}
      </main>
      <div className="w-full h-20 bg-gray-200 rounded-t-lg flex items-center justify-center">
        <div className="w-48 h-12 bg-blue-500 rounded-lg"></div> {/* Example shape */}
      </div>
    </div>
  );
}
