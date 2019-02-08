import React from "react";
import AlignLeftLogo from "./../align-left.svg";
import AlignCenterLogo from "./../align-center.svg";
import AlignRightLogo from "./../align-right.svg";

class FormatToolbar extends React.Component {
  render() {
    return (
      <div className="format-toolbar">
        <button
          className={
            "tooltip-icon-button " +
            (this.props.hasMark("bold") ? "btn-active" : "")
          }
          onPointerDown={e => this.props.onMarkClick(e, "bold")}
        >
          <strong>B</strong>
        </button>
        <button
          className={
            "tooltip-icon-button " +
            (this.props.hasMark("italic") ? "btn-active" : "")
          }
          onPointerDown={e => this.props.onMarkClick(e, "italic")}
        >
          <em>I</em>
        </button>

        <button
          className={
            "tooltip-icon-button " +
            (this.props.hasMark("underline") ? "btn-active" : "")
          }
          onPointerDown={e => this.props.onMarkClick(e, "underline")}
        >
          <u>U</u>
        </button>

        <button
          className={
            "tooltip-icon-button " +
            (this.props.currentAlign("left") ? "btn-active" : "")
          }
          onPointerDown={() => {
            this.props.setAlign("left");
          }}
        >
          <img src={AlignLeftLogo} alt="" />
        </button>

        <button
          className={
            "tooltip-icon-button " +
            (this.props.currentAlign("center") ? "btn-active" : "")
          }
          onMouseDown={() => {
            this.props.setAlign("center");
          }}
        >
          <img src={AlignCenterLogo} alt="" />
        </button>

        <button
          className={
            "tooltip-icon-button " +
            (this.props.currentAlign("right") ? "btn-active" : "")
          }
          onMouseDown={() => {
            this.props.setAlign("right");
          }}
        >
          <img src={AlignRightLogo} alt="" />
        </button>
      </div>
    );
  }
}

export default FormatToolbar;
