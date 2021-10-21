function Mobile({ brands, name }) {
  let functional = name.split(" ").join("");

  let itembrands = brands.map((item) => {
    return <li key={item}>{item}</li>;
  });

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <ul id={functional}>{itembrands}</ul>
      </div>
    </div>
  );
}

export { Mobile };
