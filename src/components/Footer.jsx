import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer class="footer footer-black">
        <div class="footer-container margin-inline">
          <p>
            Questions? <br />
            Call 007-803-321-2130
          </p>
          <div class="links">
            <ul class="">
              <li>
                <a class="text-terms text-underline" href="">
                  FAQ
                </a>
              </li>
              <li>
                <a class="text-terms text-underline" href="">
                  Cookie Preferences
                </a>
              </li>
            </ul>

            <ul>
              <li>
                <a class="text-terms text-underline" href="">
                  Help Center
                </a>
              </li>
              <li>
                <a class="text-terms text-underline" href="">
                  Corporate Information
                </a>
              </li>
            </ul>

            <a class="text-terms text-underline" href="">
              Terms of Use
            </a>

            <a class="text-terms text-underline" href="">
              Privacy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
