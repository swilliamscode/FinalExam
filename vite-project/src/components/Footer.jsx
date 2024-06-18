import React from "react";
import "../App.css";

const Footer = () => {
    return (
        <div className="footer-container">
           <div className="horizontal-list">
        <ul class="list-group" >
            <div className="line">
          <li class="list-group-item2">© 2024 Overstock Outlet</li>
          <li class="list-group-item2" ><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lock"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>  Security</li>
          <li class="list-group-item2">Policies</li>
          <li class="list-group-item2">About</li>
          <li class="list-group-item2">Contact Us</li>
             </div>
        </ul>
        </div>
        </div>
    );
};

export default Footer;