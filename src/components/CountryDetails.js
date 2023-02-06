function CountryDetails(props) {
  const index = props.countries[0];
  const image = index.alpha2Code.toLowerCase();
  return (
    <div
      style={{
        width: '40%',
        height: '100%',
        border: 'solid pink',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          width: '100%',
          height: '30%',
          border: 'solid green',
          marginTop: '20px',
        }}
      >
        <img
          style={{ width: '70%' }}
          src={`https://flagpedia.net/data/flags/icon/72x54/${index.alpha2Code.toLowerCase()}.png`}
          alt="flag"
        />
        <h3>{index.name.common}</h3>
      </div>
      <div style={{ border: 'solid blue', width: '100%' }}>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <h3>Capital</h3>
          <span>{index.capital}</span>
        </div>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <h3>Area</h3>
          <span>{index.area} km²</span>
        </div>
        <div
          style={{
            flexDirection: 'row',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <h3>Borders</h3>
          <span>{index.borders ? index.borders : null}</span>
        </div>
      </div>
    </div>
  );
}

export default CountryDetails;
