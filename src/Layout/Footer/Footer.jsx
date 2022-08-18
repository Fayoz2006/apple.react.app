import React from "react";
import "./../../CSS/production/Footer.css";

const Footer = () => {
  let links = {
    shopLearn: [
      "Store",
      "Mac",
      "iPad",
      "iPhone",
      "Watch",
      "AirPods",
      "TV & Home",
      "AirTag",
      "Accessories",
      "Gift Cards",
    ],
    services: [
      "Apple Music",
      "Apple TV +",
      "Apple Fitness+",
      "Apple News+",
      "Apple Arcade",
      "iClound",
      "Apple One",
      "Apple Card",
      "Apple Books",
      "Apple Podcasts",
      "App Store",
    ],
    account: ["Manage Your Apple ID", "Apple Store Account", "iClound.com"],
    appleStore: [
      "Find a Store",
      "Genius Bar",
      "Today at Apple",
      "Apple Camp",
      "Apple Store App",
      "Refurbished and Clearance",
      "Financing",
      "Apple Trade In",
      "Order Status",
      "Shopping Help",
    ],
    business: ["Apple and Business", "Shop for Business"],
    education: ["Apple and Education", "Shop for K-12", "Shop for College"],
    healthcare: [
      "Apple in Healthcare",
      "Health on Apple Watch",
      "Health Recordson iPhone",
    ],
    govemment: ["Shop for Govemment", "Shop for Veterans and Military"],
    appleValue: [
      "Accessibility",
      "Education",
      "Enviroment",
      "Inxlusion and Diversity",
      "Privacy",
      "Racial Equity and Justice",
      "Supplier Responsibility",
    ],
    aboutApple: [
      "Newsroom",
      "Apple Leadership",
      "Career Opportunities",
      "Investors",
      "Ethics & Compliance",
      "Events",
      "Contact Apple",
    ],
  };

  return (
    <footer>
      <div className="top-side">
        <p>
          1. Qualified Purchasers receive an Apple Gift Card when they purchase
          an eligible Mac or iPad at a Qualifying Location. Only one Apple Gift
          Card per eligible Mac or iPad per Qualified Purchaser. Offer subject
          to availability. While supplies last. Qualified Purchasers shall
          receive a discount equal to the value of the Apple Gift Card off the
          price of the eligible Mac or iPad, but will be charged for all items
          in their cart, including the Apple Gift Card. Important notice
          regarding the checkout receipt and monthly statement for Apple Card
          Monthly Installment (ACMI) purchases with this promotion: Qualified
          Purchasers selecting ACMI (a 0% APR payment option) as payment type at
          checkout shall receive a discount equal to the value of the Apple Gift
          Card off the price of the eligible Mac or iPad. This will result in
          one ACMI installment plan over 12 months for the eligible iPad or Mac
          discounted by the instant credit, and a second ACMI installment plan
          over 12 months for the full price of the Apple Gift Card. The total
          combined amount charged over the two separate ACMI installment plans
          will reflect the original full retail price of the Eligible Product.
          Separately, Qualified Purchasers will receive and be charged for the
          Apple Gift Card in the amount of the applicable discount off the
          eligible Mac or iPad. ACMI is subject to credit approval and credit
          limit. Variable APRs for Apple Card other than ACMI range from 12.49%
          to 23.49% based on creditworthiness. Rates as of July 1, 2022. If you
          choose the pay‑in‑full or one‑time‑payment option for an ACMI‑eligible
          purchase instead of choosing ACMI as the payment option at checkout,
          that purchase will be subject to the variable APR assigned to your
          Apple Card. Taxes and shipping are not included in ACMI transactions
          and are subject to your standard purchase APR. See the Apple Card
          Customer Agreement at
          https://www.goldmansachs.com/terms-and-conditions/Apple-Card-Customer-Agreement.pdf
          for more information. ACMI is not available for purchases made online
          at the following special stores: Apple Employee Purchase Plan;
          participating corporate Employee Purchase Programs; Apple at Work for
          small businesses; Government, and Veterans and Military Purchase
          Programs, or on refurbished devices. Apple Card is issued by Goldman
          Sachs Bank USA, Salt Lake City Branch. Available for qualifying
          applicants in the United States. If you reside in the U.S.
          territories, please call Goldman Sachs at 877-255-5923 with questions
          about accessing this offer or applying for Apple Card. This offer
          cannot be combined with the Apple Employee Purchase Plan or business
          loyalty pricing. Availability of in‑store promotion offerings may be
          limited by Apple Store location closures as a result of COVID‑19.
          Additional restrictions apply. View full terms and conditions of offer
          here.
        </p>
        <p>
          To access and use all the features of Apple Card, you must add Apple
          Card to Wallet on an iPhone or iPad with the latest version of iOS or
          iPadOS. Update to the latest version by going to Settings General
          Software Update. Tap Download and Install.
        </p>
        <p>Available for qualifying applicants in the United States.</p>
        <p>
          Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City Branch.
        </p>
        <p>
          Learn more about how Apple Card applications are evaluated at
          support.apple.com/kb/HT209218 .
        </p>
        <p>
          Major League Baseball trademarks and copyrights are used with
          permission of MLB Advanced Media, L.P. All rights reserved.
        </p>
      </div>
      <div className="middle-side">
        <div className="links _pc">
          <div className="shop-and-learn">
            <p>Shop and Learn</p>
            {links.shopLearn.map((item, index) => (
              <a key={index} href="https://www.apple.com">
                {item}
              </a>
            ))}
          </div>
          <div className="services">
            <p>Services</p>
            {links.services.map((item, index) => (
              <a key={index} href="https://www.apple.com">
                {item}
              </a>
            ))}
            <div className="account">
              <p>Account</p>
              {links.account.map((item, index) => (
                <a key={index} href="https://www.apple.com">
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="appleStore">
            <p>Apple Store</p>
            {links.appleStore.map((item, index) => (
              <a key={index} href="https://www.apple.com">
                {item}
              </a>
            ))}
          </div>
          <div className="business">
            <p>For Business</p>
            {links.business.map((item, index) => (
              <a href="https://www.apple.com" key={index}>
                {item}
              </a>
            ))}
            <div className="education">
              <p>For Education</p>
              {links.education.map((item, index) => (
                <a href="https://www.apple.com" key={index}>
                  {item}
                </a>
              ))}
            </div>
            <div className="healthcare">
              <p>For Healthcare</p>
              {links.healthcare.map((item, index) => (
                <a href="https://www.apple.com" key={index}>
                  {item}
                </a>
              ))}
            </div>
            <div className="govemment">
              <p>For Govemment</p>
              {links.govemment.map((item, index) => (
                <a href="https://www.apple.com" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div className="appleValue">
            <p>Apple Value</p>
            {links.appleValue.map((item, index) => (
              <a href="https://www.apple.com" key={index}>
                {item}
              </a>
            ))}
            <div className="aboutApple">
              <p>About Apple</p>
              {links.aboutApple.map((item, index) => (
                <a href="https://www.apple.com" key={index}>
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="links _mobile">
          <div className="shopLearn">
            <p>Shop and Learn</p>
            <p>+</p>
          </div>
          <div className="services">
            <p>Services</p>
            <p>+</p>
          </div>
          <div className="account">
            <p>Account</p>
            <p>+</p>
          </div>
          <div className="appleStore">
            <p>Apple Store</p>
            <p>+</p>
          </div>
          <div className="business">
            <p>For Business</p>
            <p>+</p>
          </div>
          <div className="education">
            <p>For Education</p>
            <p>+</p>
          </div>
          <div className="healthcare">
            <p>For Healthcare</p>
            <p>+</p>
          </div>
          <div className="govemment">
            <p>For Govemment</p>
            <p>+</p>
          </div>
          <div className="appleValue">
            <p>Apple Value</p>
            <p>+</p>
          </div>
          <div className="aboutApple">
            <p>About Apple</p>
            <p>+</p>
          </div>
        </div>
        <p>
          More ways to shop:{" "}
          <a href="https://www.apple.com">Find an Apple Store</a> or{" "}
          <a href="https://www.apple.com">other retailer</a> Or call
          1-800-MY-APPLE.
        </p>
      </div>
      <div className="bottom-side">
      <a className="_mobile" href="https://www.apple.com">United States</a>
        <p>Copyright © 2022 Apple Inc. All rights reserved.</p>
        <div className="links">
          <a href="https://www.apple.com">Privacy Policy</a>
          <a href="https://www.apple.com">Terms of Use</a>
          <a href="https://www.apple.com">Sales and Refunds</a>
          <a href="https://www.apple.com">Legal</a>
          <a href="https://www.apple.com">Site Map</a>
        </div>
        <a  className="_pc" href="https://www.apple.com">United States</a>
      </div>
    </footer>
  );
};

export default Footer;
