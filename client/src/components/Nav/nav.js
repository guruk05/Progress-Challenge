import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import $ from "jquery";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function() {
      var showHeaderAt = 150;
      var win = $(window),
        body = $("body");
      // Show the fixed header only on larger screen devices
      if (win.width() > 600) {
        // When we scroll more than 150px down, we set the
        // "fixed" class on the body element.
        win.on("scroll", function(e) {
          if (win.scrollTop() > showHeaderAt) {
            body.addClass("fixed");
          } else {
            body.removeClass("fixed");
          }
        });
      }
    });
  }

  render() {
    return (
      <div>
        <header class="header-fixed">
          <div class="header-limiter">
            <h1>
              <a href="#">
                <span className="compName1">&nbsp;I</span>
                <span className="compName2">&nbsp;M</span>
                <span className="compName3">&nbsp;D</span>
                <span className="compName4">&nbsp;B</span>
              </a>
            </h1>

            <nav>
              <Link to="/">
                <a>Home</a>
              </Link>

              <Link to="/createmovie">
                <a>Add Movie</a>
              </Link>

              <Link to="/about">
                <a>About</a>
              </Link>
            </nav>
          </div>
        </header>

        <div class="header-fixed-placeholder"></div>
      </div>
    );
  }
}

export default Nav;
