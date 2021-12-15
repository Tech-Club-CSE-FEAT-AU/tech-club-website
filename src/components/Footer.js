import React from "react";

export default function Footer(props)  {

    let propsData = props.Data;
    return (
      <footer style={{ background: "#fafbff" }}>
        <div className="row">
          <div className="twelve columns">
            <ul className="social-links">
              {propsData.socialLinks &&
                propsData.socialLinks.map((item) => {
                  return (
                    <li key={item.url}>
                      <a href={item.url}>
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a
              style={{ background: "#b41a20" }}
              className="smoothscroll"
              title="Back to Top"
              href="#home"
            >
              <i className="icon-up-open" />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com">&copy;</a>2021 Tech
            Club&nbsp;|&nbsp; All right reserved.
            <br />
            Annamalai University
          </div>
        </div>
      </footer>
    );

}
