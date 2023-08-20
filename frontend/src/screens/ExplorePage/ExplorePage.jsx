import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import ComponentSlider from '../../components/ComponentSlider/ComponentSlider';
import Button from '../../components/Button/Button';
import ImageContainer from '../../components/ImageContainer/ImageContainer';
import { Image } from '@mui/icons-material';

const ExplorePage = () => {
  const ComponentListUrl = [
    <ImageContainer imageurl="https://e0.pxfuel.com/wallpapers/969/40/desktop-wallpaper-tunnel-dark-place-neon-lights.jpg" width="280px" height="250px"/>,
    <ImageContainer imageurl="https://e1.pxfuel.com/desktop-wallpaper/667/677/desktop-wallpaper-dark-anime-scenery-anime-dark-places-thumbnail.jpg"  width="280px" height="250px"/>,
    <ImageContainer imageurl="https://media.moddb.com/images/games/1/53/52485/screen1.jpg"  width="280px" height="250px"/>
    // Add more image URLs to the list
  ];
  return (
    <>
      <PageHeader title="Explore" />
      <div className="my-8 mx-8">
        <h1 style={{ fontSize: '1.5rem' }}>Olympus Mons</h1>
      </div>
      <div className="mx-8">
        Welcome to the awe-inspiring Olympus Mons, a colossal masterpiece that graces the Martian horizon and stands as the tallest mountain
        in our SOL solar system. Rising majestically above the rust-hued landscape, this geological wonder beckons intrepid explorers to
        embark on a once-in-a-lifetime adventure.
      </div>
      <ComponentSlider ComponentListUrl={ComponentListUrl}/>
      <div className="my-8 mx-8">
        As you ascend its flanks, you'll be enveloped by an ethereal atmosphere, a blend of Martian history and the endless possibilities of
        the cosmos. The grandeur of Olympus Mons unfolds with every step, offering panoramic vistas that seem to stretch to infinity,
        allowing you to truly grasp the scale of our celestial surroundings.
      </div>
      <div className="text-xl text-justify flex justify-center">Total Distance : 1.876 Light Years</div>
      <div className="text-xl text-justify flex justify-center">$599 Upwards</div>
s
      <div className="flex justify-center mx-8 my-8">
        <Button text="Book Now" type="full"></Button>
      </div>
    </>
  );
};

export default ExplorePage;
