import "./App.css";
import Layout from "./Layout/Layout";
import FirstContainer from "./Components/Containers/FirstContainer";
import FirstVersion from "./Components/Containers/FirstVersion";
import SecondVersion from "./Components/Containers/SecondVersion";
import ThirdVersion from "./Components/Containers/ThirdVersion";

function App() {
  let obj = {
    FirstVersion: {
      MacBookAir: {
        title: "MacBook Air",
        subtitleImg:
          "https://www.apple.com/v/home/aq/images/logos/macbook-air/logo_hero_macbookair__edl9uovq56wm_largetall.png",
        theme: "white info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/heroes/macbook-air/hero_macbookair__el7scava26mq_largetall.png",
        style: {
          left: "30%",
          top: "50%",
          width: "252px",
          height: "41px",
          fontsize: "56px",
        },
      },
      MacBookPro13: {
        title: "MacBook Pro 13",
        subtitleImg:
          "https://www.apple.com/v/home/aq/images/logos/macbook-pro-13/logo_promo_mbp13__gnmug5nsag66_large.png",
        theme: "dark info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/macbook-pro-13/promo_mbp13__buwssod6c8vm_large.jpg",
        style: {
          left: "50%",
          top: "20%",
          width: "223px",
          height: "51px",
          fontsize: "40px",
        },
      },
    },
    SecondVersion: {
      iPhone13: {
        title: "iPhone 13",
        subtitle: "Your new superpower.",
        theme: "white info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/heroes/iphone-13/hero_iphone13_avail__gnqqkzuai6um_largetall.jpg",
        style: {
          top: "20%",
          fontsize: {
            h2: "56px",
            h3: "28px",
          },
        },
      },
      iPhone13Pro: {
        title: "iPhone 13 Pro",
        subtitle: "Oh.So.Pro.",
        theme: "white info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/iphone-13-pro/promo_iphone13pro_avail__beadms4ldidu_large.jpg",
        style: {
          top: "20%",
          fontsize: {
            h2: "40px",
            h3: "21px",
          },
        },
      },
      AirPods: {
        title: "AirPods",
        subtitle: "with Spatial Audio",
        theme: "dark info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/airpods-spatial/promo_airpods_spatial__cak1sq3kb1w2_large.jpg",
        style: {
          top: "80%",
          fontsize: {
            h2: "40px",
            h3: "21px",
          },
        },
      },
    },
    ThirdVersion: [
      {
        title: {
          link: "https://www.apple.com/v/home/aq/images/logos/watch-series-7/promo_logo_watch_lte__emrof7zzkriq_large.png",
          style: {
            width: "176px",
            height: "69px",
          },
        },
        subtitle: "It’s our largest display yet.",
        theme: "white info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/watch-series-7/promo_watch_lte__djeaso7ukrsm_large.jpg",
      },
      {
        title: {
          link: "https://www.apple.com/v/home/aq/images/logos/ipad-air/promo_logo_ipadair__frwnnsqveeye_large.png",
          style: {
            width: "133px",
            height: "37px",
          },
        },
        subtitle: "Light. Bright. Full of might.",
        theme: "dark info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Buy >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/ipad-air/promo_ipadair_avail__ferd4bfpcdm6_large.jpg",
      },
      {
        title: {
          link: "https://www.apple.com/v/home/aq/images/logos/apple-card/logo__dcojfwkzna2q_large.png",
          style: {
            width: "116px",
            height: "36px",
          },
        },
        subtitle: "Get up to 3% Daily Cash back with every purchase.",
        theme: "white info",
        links: [
          {
            text: "Learn more >",
            link: "#",
          },
          {
            text: "Apply now >",
            link: "#",
          },
        ],
        img: "https://www.apple.com/v/home/aq/images/promos/apple-card/tile__cauwwcyyn9hy_large.jpg",
      },
    ],
  };

  return (
    <>
      <Layout>
        <main>
          <div className="screen-big-wrapper">
            <FirstContainer />
            <FirstVersion item={obj.FirstVersion.MacBookAir} />
            <SecondVersion item={obj.SecondVersion.iPhone13} />
          </div>
          <div className="screen-wrapper">
            <SecondVersion item={obj.SecondVersion.iPhone13Pro} />
            <FirstVersion item={obj.FirstVersion.MacBookPro13} />
            {obj.ThirdVersion.map((item, index) => (
              <ThirdVersion key={index} item={item} />
            ))}
            <SecondVersion item={obj.SecondVersion.AirPods} />
          </div>
        </main>
      </Layout>
    </>
  );
}

export default App;
