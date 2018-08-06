import React from 'react';

const DogFoods = ({ dogFoods }) => {
  const renderDogFoods = dogFoods.map(dogFood =>
    <p key={dogFood.id}>{dogFood.brand}</p>
  );

  return (
    <div>
      {renderDogFoods}
    </div>
  );
}

export default DogFoods;
