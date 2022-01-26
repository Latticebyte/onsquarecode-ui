import { useContext, useState } from "react";
import { Controlled as CodeMirror } from "react17-codemirror2";
import { DEFAULT_SETTINGS } from "../../constants";
import { GlobalContext } from "../../context/GlobalProvider";
import("codemirror/lib/codemirror.css")
  .then(() => {})
  .catch(() => {});
import("codemirror/theme/material.css")
  .then(() => {})
  .catch(() => {});

const CodeEditor = ({ settings, readOnly }) => {
  const { state } = useContext(GlobalContext);
  const [value, setValue] = useState("");

  const handleChange = (editor, data, value) => {
    setValue(value);
  };

  const config = { ...DEFAULT_SETTINGS, ...settings };

  const options = {
    screenReaderLabel: "Code editor",
    lineNumbers: config.lineNumbers,
    firstLineNumber: config.firstLineNumber,
    mode: state || "xml",
    theme: "material",
    scrollbarStyle: null,
    viewportMargin: Infinity,
    lineWrapping: true,
    smartIndent: true,
    extraKeys: {
      "Shift-Tab": "indentLess",
    },
    readOnly,
    showInvisibles: config.hiddenCharacters,
    autoCloseBrackets: true,
  };

  return (
    <>
      <CodeMirror
        value={value}
        onBeforeChange={handleChange}
        autoScroll={false}
        options={options}
      />
    </>
  );
};

export default CodeEditor;
