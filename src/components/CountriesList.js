function CountriesList(props) {
  console.log(props.countries, 'test');
  const obj = props.countries;
  return obj.map((item, i) => {
    return (
      <div
        key={i.toString()}
        style={{
          width: '100%',
          display: 'flex',
          border: 'solid 1px gray',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '20px 0px',
        }}
      >
        <div style={{ alignItems: 'center', justifyContent: 'center' }}>
          <img
            src={`https://flagpedia.net/data/flags/icon/72x54/${item.alpha2Code.toLowerCase()}.png`}
            alt="img"
          />

          <h3> {item.name.common}</h3>
        </div>
      </div>
    );
  });
}

export default CountriesList;
