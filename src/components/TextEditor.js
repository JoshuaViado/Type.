import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Editor } from "slate-react";
import { Value } from "slate";
import FormatToolbar from "./FormatToolbar";
import Plugins from "./Plugins";
import button from "./../main-button.png";
import anime from "animejs";

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: "block",
        type: "paragraph",
        nodes: [
          {
            object: "text",
            leaves: [
              {
                text: "Write...."
              }
            ]
          }
        ]
      }
    ]
  }
});

export default class TextEditor extends Component {
  state = {
    value: initialValue,
    align: "center"
  };

  ref = editor => {
    this.editor = editor;
  };

  onChange = ({ value }) => {
    this.setState({ value });
  };

  renderMark = props => {
    switch (props.mark.type) {
      case "bold":
        return <strong>{props.children}</strong>;
      // Add our new mark renderers...
      case "code":
        return <code>{props.children}</code>;
      case "italic":
        return <em>{props.children}</em>;
      case "list":
        return (
          <ul {...props.attributes}>
            <li>{props.children}</li>
          </ul>
        );
      case "underline":
        return <u>{props.children}</u>;
      default:
        return;
    }
  };

  hasMark = type => {
    const { value } = this.state;
    // console.log(value.activeMarks.some(mark => mark.type === type));
    return value.activeMarks.some(mark => mark.type === type);
  };

  onMarkClick = (e, type) => {
    e.preventDefault();
    if (this.editor) {
      this.editor.toggleMark(type);
    }
  };

  currentAlign = align => {
    console.log("its working");
    return this.state.align === align;
  };

  setAlign = alignValue => {
    document.documentElement.style.setProperty("--alignment", alignValue);
    this.setState({
      align: alignValue
    });
  };

  render() {
    return (
      <div
        onMouseMove={e => {
          document.documentElement.style.setProperty(
            "--cursorX",
            e.clientX + "px"
          );
          document.documentElement.style.setProperty(
            "--cursorY",
            e.clientY + "px"
          );
        }}
      >
        <Fragment>
          <div
            className="tool-container"
            onMouseEnter={() => {
              anime({
                targets: ".format-toolbar",
                bottom: "130px",
                opacity: 1,
                duration: 2000
              });
            }}
            onMouseLeave={() => {
              anime({
                targets: ".format-toolbar",
                bottom: "50px",
                opacity: 0,
                duration: 2000
              });
            }}
          >
            <button className="mainButton">
              <img src={button} alt="" />
            </button>

            <FormatToolbar
              hasMark={this.hasMark}
              onMarkClick={this.onMarkClick}
              setAlign={this.setAlign}
              currentAlign={this.currentAlign}
            />
          </div>

          <Editor
            placeholder={"Enter some text..."}
            className="editor"
            ref={this.ref}
            plugins={Plugins}
            value={this.state.value}
            onChange={this.onChange}
            renderMark={this.renderMark}
            spellCheck={true}
          />
        </Fragment>
      </div>
    );
  }
}
