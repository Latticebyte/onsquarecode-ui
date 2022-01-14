import { useQuery } from "@apollo/client";
import { GET_ALL_CODES } from "../../graphql";

const CodeEditor = () => {
  const {
    loading,
    data: { getAllCodes } = { getAllCodes: [] },
    error,
  } = useQuery(GET_ALL_CODES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <>
      <div className="grid">
        ON SQUARE CODE
        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-10 mx-auto">
            <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
              {getAllCodes.map(({ description, language, codeBlock }, idx) => (
                <div key={idx}>
                  <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
                    <h1 className="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                      {language}
                    </h1>

                    <p className="text-gray-500 dark:text-gray-300">
                      {description}
                    </p>

                    <div className="inline-flex p-2 text-blue-500 capitalize transition-colors duration-200 transform bg-blue-100 rounded-full dark:bg-blue-500 dark:text-white hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                      <p className="text-gray-500 dark:text-gray-300 font-semibold">
                        {codeBlock}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              ;
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CodeEditor;
