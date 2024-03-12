const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/mydb";


const mydb = async () => {
  try {
    const client = new MongoClient(url);

    await client.connect();
    const movies = client.db("mydb");
    const mydata = movies.collection("data");

    //PUT NAME OF ANY FUNCTION IN PLACE OF SHORTESTTITLE()
    const result = await mydata.aggregate(shortestTitle()).toArray();
    console.log(result);

  } catch (error) {
    console.log(error);
    console.log("Internal server error");
  }
};

//GET NO. OF MOVIES
const countMovies = () => {
  return [
    {
      $group: {
        _id: null,
        Moviescount: { $sum: 1 },
      },
    },
    {
      $project: {
        _id: 0,
        Moviescount: 1,
      },
    },
  ];
};

//GET AVERAGE OF RUNTIME OF DATA WHICH CONTAIN GENRES
const averageRuntime = ()=>([
  {
    $group: {
      _id: "$genres",
      averageRuntime: { $avg: "$runtime" },
    },
  },
]);

//Count of movies released in the USA
const moviesInUSA = ()=>([
  {
    $match: {
      country: "USA",
    },
  },
  {
    $group: {
      _id: null,
      count: { $sum: 1 },
    },
  },
]);

//GET YEARS OF ALL MOVIES
const years = () => {
  return [
    {
      $group: {
        _id: "$year",
      },
    },
    {
      $project: {
        _id: 0,
        year: "$_id",
      },
    },
  ];
};

//count the number of movies for each genre
const GenreMovies = () => {
  return [
    {
      $unwind: "$genres",
    },
    {
      $group: {
        _id: "$genres",
        count: { $sum: 1 },
      },
    },
  ];
};
//Top 5 movies with the highest earnings
const topMovies =  ()=>([
  {
    $sort: { boxOffice: -1 },
  },
  {
    $limit: 5,
  },
]);

//Movies with the highest ratings
const topRatedMovies = ()=>([
  {
    $sort: { rating: -1 },
  },
  {
    $limit: 5,
  },
]);

//Get new movie in the dataset
const newMovie = () => {
  return [
    {
      $sort: { year: -1 },
    },
    {
      $limit: 1,
    },
    {
      $project: {
        _id: 0,
        year: 1,
      },
    },
  ];
};

//Movies with a specific actor
const Actor =  ()=>([
  {
    $match: {
      cast: "Tom Hanks",
    },
  },
]);

//MOVIE WITH SHORTEST TITLE

const shortestTitle = () => {
  return [
    {
      $project: {
        _id: 0,
        title: 1,
        titleLength: { $strLenCP: "$title" },
      },
    },
    {
      $sort: { titleLength: 1 },
    },
    {
      $limit: 1,
    },
  ];
};

//longest title length movie

const longestTitle = () => {
  return [
    {
      $project: {
        _id: 0,
        title: 1,
        titleLength: { $strLenCP: "$title" },
      },
    },
    {
      $sort: { titleLength: -1 },
    },
    {
      $limit: 1,
    },
  ];
};

//Group movies by language and count
const Language = ()=>([
  {
    $group: {
      _id: "$language",
      count: { $sum: 1 },
    },
  },
]);



mydb();

