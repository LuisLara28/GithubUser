import React, { useState } from "react";

//Components
import Header from "../Components/Header";
import Form from "../Components/Form";
import HeroContainer from "../Components/HeroContainer";
import Hero from "../Components/Hero";
import Loader from "../Components/Loader";

const Home = () => {
  //STATE
  const [heroName, setHeroName] = useState("");
  const [heroData, setHeroData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  //FUNCTIONS
  const handleChange = ({ value }) => {
    setHeroName(value);
  };

  const handleSearchHero = async (e) => {
    setHeroData([]);
    setIsLoading(true);
    e.preventDefault();
    const token = "10159203279148880";
    try {
      const response = await fetch(
        `https://www.superheroapi.com/api.php/${token}/search/${heroName}`
      );
      const result = await response.json();

      if (result.response === "success") {
        setError(null);
        setHeroData(result.results);
      } else {
        setHeroData(null); //Sirve para resetear el state cuando tenemos un error
        setError(result.error);
      }

      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Form handleChange={handleChange} handleSearchHero={handleSearchHero} />

      <HeroContainer>
        {isLoading && <Loader />}

        {heroData && heroData.length > 0 ? (
          heroData.map((hero) => (
            <Hero
              key={hero.id}
              name={hero.name}
              avatar={hero.image.url}
              id={hero.id}
            />
          ))
        ) : error ? (
          <h4>{error}</h4>
        ) : null}
      </HeroContainer>
    </div>
  );
};

export default Home;
