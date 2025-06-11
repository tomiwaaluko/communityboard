import "./App.css";

function App() {
  const foodTrucks = [
    {
      id: 1,
      name: "Birria-Landia",
      cuisine: "Mexican",
      image:
        "https://offloadmedia.feverup.com/secretnyc.co/wp-content/uploads/2025/03/19125643/Birria-Landia--1024x683.jpg",
    },
    {
      id: 2,
      name: "Mysttik Masala",
      cuisine: "Indian",
      image: "https://pbs.twimg.com/media/DcTwBH0X4AAlq6X.jpg",
    },
    {
      id: 3,
      name: "The Halal Guys",
      cuisine: "Middle Eastern",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh9Z7DKJbeL88abQ83HgTr2AEs4-bDeavD7Q&s",
    },
    {
      id: 4,
      name: "NY Dosas",
      cuisine: "Vegetarian",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJ54WtiXoMHvsTr62fzvCtxwRhrOy6Vc8FQ&s",
    },
    {
      id: 5,
      name: "Jerk Pan",
      cuisine: "Jamaican",
      image:
        "https://res.cloudinary.com/the-infatuation/image/upload/q_auto,f_auto/cms/reviews/jerk-pan/banners/1561989308.8",
    },
    {
      id: 6,
      name: "Tong",
      cuisine: "Bangladeshi",
      image:
        "https://cdn.vox-cdn.com/thumbor/PQQLB6AWvUMJPMQWVEnb6yGkor0=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23935316/IMG_1338.JPG",
    },
    {
      id: 7,
      name: "King Souvlaki of Astoria",
      cuisine: "Greek",
      image:
        "https://kingsouvlakinyc.com/wp-content/themes/king/images/location-f.jpg",
    },
    {
      id: 8,
      name: "Ling's Sweet Mini Cakes",
      cuisine: "Chinese",
      image:
        "https://fastly.4sqi.net/img/general/600x600/61129566_7PLEKHNMZ-VNqzYx2jWRVZGrZ42PdPX0M-j9Ftpg8Ts.jpg",
    },
    {
      id: 9,
      name: "Uncle Gussy's",
      cuisine: "Greek",
      image:
        "https://d3hbe0kmbam4a5.cloudfront.net/photos/67e1cdb7-bc27-4f26-8343-851bfaa7fc22.jpg",
    },
    {
      id: 10,
      name: "Patacon Pisao",
      cuisine: "Venezuelan",
      image: "https://live.staticflickr.com/8088/8400188739_53b16c7d13_z.jpg",
    },
    {
      id: 11,
      name: "Mom's Mono",
      cuisine: "Tibetan",
      image:
        "https://infatuation.imgix.net/media/images/reviews/moms-momo/banners/1606245507.888788.png",
    },
    {
      id: 12,
      name: "Makina Cafe",
      cuisine: "Ethiopian",
      image:
        "https://fastly.4sqi.net/img/general/600x600/784042_29bZZHPGisHnWqyIuuXMo8D2zzW7QS6Hft7Vv15SH_I.jpg",
    },
  ];

  return (
    <div className="app">
      <div className="awning"></div>
      <div className="container">
        <h1 className="title">Food Truck Favorites</h1>
        <div className="food-truck-grid">
          {foodTrucks.map((truck) => (
            <div key={truck.id} className="food-truck-card">
              <img src={truck.image} alt={truck.name} className="truck-image" />
              <div className="card-content">
                <h3 className="truck-name">{truck.name}</h3>
                <p className="truck-cuisine">{truck.cuisine}</p>
                <button className="view-menu-btn">View Menu</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
