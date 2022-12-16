import React from "react";

function Footer() {
  const curryear = new Date().getFullYear();
  return (
    <footer>
      <div>
        <h4>Our Experienced Pediatricians Says</h4>
        <p>
          Choose seafood, lean meat and poultry, eggs, beans, peas, soy
          products, and unsalted nuts and seeds. Fruits. Encourage your child to
          eat a variety of fresh, canned, frozen or dried fruits. Look for
          canned fruit that says it's light or packed in its own juice.
        </p>

        <div class="content">
          <div class="left box">
            <div class="upper">
              <div class="topic">About us</div>
              <p>
                BabyNama is an Online Platform which connects Mothers with
                Paediatricians, Nutritionists, Gynaecologists and various other
                medical experts who are available for mothers and children to
                offer instant medical advice with regard to the health of the
                child.{" "}
              </p>
              <ul class="socials">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-youtube"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin-square"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="lower">
            <div class="topic">Contact us</div>
            <div class="phone">
              <p>
                <i class="fa fa-phone"></i>(91+)007 9089 6767
              </p>
            </div>
            <div class="email">
              <p>
                <i class="fa fa-envelope"></i>gagahealth@gmail.com
              </p>
            </div>
            <div class="email">
              <p>
                <i class="fa fa-map-marker"></i>5 th Floor Two Horizon Centre.
              </p>
            </div>
            <div>
              <p>DLF Phase 5, Gurugram, Haryana 122002</p>
            </div>
          </div>

          <div class="middle box">
            <div class="topic">Our Services</div>
            <div>
              <p>Fast service and Response Time</p>
            </div>
            <div>
              <p>Experienced Pedistricians</p>
            </div>
            <div>
              <p>Growth Tracking</p>
            </div>
            <div>
              <p>Nutritionist provide Proper Guide</p>
            </div>
            <div>
              <p>HealthCare</p>
            </div>
            <div>
              <p>One-on-One Pediatric Consultation</p>
            </div>
          </div>
          <div class="right box">
            <div class="topic">Subscribe us</div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <p>
          Copyright © 2022 <a href="#">gagahealth.com</a> All rights reserved
        </p>
      </div>
    </footer>
  );
}

export default Footer;
