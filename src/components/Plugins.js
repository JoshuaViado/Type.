import MarkHotkey from "./MarkHotKey";

const Plugins = [
  MarkHotkey({ key: "b", type: "bold" }),
  MarkHotkey({ key: "`", type: "code" }),
  MarkHotkey({ key: "i", type: "italic" }),
  MarkHotkey({ key: "~", type: "strikethrough" }),
  MarkHotkey({ key: "u", type: "underline" })
];

export default Plugins;
