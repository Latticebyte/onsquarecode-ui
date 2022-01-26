import { Navbar, CodeEditor, EditorToolbar } from "../components";
const Home = () => {
  return (
    <>
      <div className="px-6">
        <div className="h-full w-full">
          <Navbar />
        </div>
        <div className="mt-[3rem] w-[200px]">
          <EditorToolbar />
        </div>
        <div className="mt-[3rem]">
          <CodeEditor />
        </div>
      </div>
    </>
  );
};

export default Home;
