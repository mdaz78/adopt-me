const Pet = ({ name, animal, breed }) => {
  return React.createElement('div', {}, [
    React.createElement('h2', {}, name),
    React.createElement('h3', {}, animal),
    React.createElement('h3', {}, breed),
  ]);
};

const App = () => {
  return React.createElement(
    'div',
    {}, // for attributes
    [
      React.createElement('h1', {}, 'Adopt Me!'),
      React.createElement(Pet, {
        name: 'Luna',
        animal: 'Dog',
        breed: 'Havanese',
      }),
      React.createElement(Pet, {
        name: 'Pepper',
        animal: 'Bird',
        breed: 'Cockateil',
      }),
      React.createElement(Pet, {
        name: 'Doink',
        animal: 'Cat',
        breed: 'Mix',
      }),
    ],
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
