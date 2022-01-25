import { useContext } from "react";
import Select from "react-select";
import { LANGUAGES } from "../../constants";
import { GlobalContext } from "../../context/GlobalProvider";

const options = LANGUAGES.map(lang => ({
  value: lang.mode,
  label: lang.name,
}));

const EditorToolbar = () => {
  const { dispatch } = useContext(GlobalContext);
  return (
    <div>
      <Select
        defaultValue={options[0]}
        options={options}
        onChange={selected => dispatch({ type: "SET_LANGUAGE", payload: selected.value })}
      />
    </div>
  );
};

export default EditorToolbar;
