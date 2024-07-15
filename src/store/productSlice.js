import { createSlice } from "@reduxjs/toolkit";

//Initial state containing an array of video game products
const initialState = {
  items: [
    {
      id: 1,
      name: "EA Sports FC24",
      genre: "Sport",
      price: 1099.95,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202406/1122/7a3b10ed3abad7f4f23f7f148e7e48e78e2cc8dc0c541090.png?w=440&thumb=false",
    },
    {
      id: 2,
      name: "Call of Duty: Black Ops 6",
      genre: "Action",
      price: 1429.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202406/0723/46b7158a0cdd76c70dc889e785f7aad8aea96452f23fd016.png?w=440&thumb=false",
    },
    {
      id: 3,
      name: "Grand Theft Auto V",
      genre: "Action, Adventure",
      price: 498.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202202/2816/K6mmm89oNII1iI1aqaClO0wh.png?w=440&thumb=false",
    },
    {
      id: 4,
      name: "Destiny 2",
      genre: "Shooter, Adventure, Action",
      price: 750.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202406/0417/f592c298a773fc8a5f1e2a02b2c71165a71819333e29159d.png?w=440&thumb=false",
    },
    {
      id: 5,
      name: "ELDEN RING",
      genre: "Role Playing Games",
      price: 849.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202107/0902/fS3Hhaq06TqLrbjMVplA8MaY.png?w=440&thumb=false",
    },
    {
      id: 6,
      name: "Tom Clancy's Rainbow Six Siege",
      genre: "Action, Shooter",
      price: 335.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202209/0617/eiXonwxcJH00bkGo3G6lUm9t.png?w=440&thumb=false",
    },
    {
      id: 7,
      name: "F1 24",
      genre: "Driving/Racing",
      price: 1289.95,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/3115/d1d84b26c5c2db9cae8157c281163ec9831b8a3162b66aa1.png?w=440&thumb=false",
    },
    {
      id: 8,
      name: "Black Myth: Wukong",
      genre: "Role Playing Games, Adventure, Action",
      price: 849.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/2122/ac63f546eed35848f4a155a9fa9ee64f0bcd7b2a175dbd78.png?w=440&thumb=false",
    },
    {
      id: 9,
      name: "DRAGON BALL: Sparking! ZERO",
      genre: "Action",
      price: 1299.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/2213/caf3b629a8afbc72a94ec15a568a898ac1845231398d77ac.png?w=440&thumb=false",
    },
    {
      id: 10,
      name: "Diablo IV",
      genre: "Unique",
      price: 896.0,
      image:
        "https://image.api.playstation.com/vulcan/ap/rnd/202405/3101/b5197d13f8cbfafa978a172cc680ca51a0ef5c903e761caf.png?w=440&thumb=false",
    },
  ],
};

//Creating the product slice using Redux toolkit
const productSlice = createSlice({
  name: "products", // Slice name
  initialState, // Initial state defined above
  reducers: {},
});

export const selectProducts = (state) => state.products.items;

export default productSlice.reducer;
