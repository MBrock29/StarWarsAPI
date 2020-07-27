import React from "react";

function Footer(props) {
  return (
    <footer>
      <h3>I have {props.todosData.length} tasks!</h3>
    </footer>
  );
}

export default Footer;
