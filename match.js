var WMA = require('wma-matching-algorithm'); //nodejs


const match = {
  living_place_type: 'Apartamento',
  area: '45',
  number_rooms: '1',
  number_parking: '4',
  stratum: '7'
  };


  
  
  const init = ({data}) => {
  
    const wma = new WMA({
      source: data,
      matchIndex: 10,
      decimals: 0,
      showOriginal: true,
      verbose: true,
      keys: [
        
        {key: `living_place_type`, m: 100},
        {key: `area`, m: 100},
        {key: `number_rooms`, m: 100},
        {key: `number_parking`, m: 100},
        {key: `stratum`, m: 100}
      ]
    });
  console.log("-----inicio ------")
    console.log(wma.match(match));
  
  };


      

  const data = {
    data: [
      {
        id: '1',
        name: 'Remanso del tunal',
        living_place_type: 'Casa',
        number_rooms: '1',
        buy_time: undefined,
        number_parking: '4',
        area: '55',
        stratum: '7'
      },
      {
        id: '2',
        name: 'La maria',
        living_place_type: 'Casa',
        number_rooms: '1',
        buy_time: undefined,
        number_parking: '4',
        area: '45',
        stratum: '7'
      },
      {
        id: '3',
        name: 'Santa Ines',
        living_place_type: 'Casa',
        number_rooms: '1',
        buy_time: undefined,
        number_parking: '4',
        area: '23',
        stratum: '3'
      },
      {
        id: '4',
        name: 'El Dorado',
        living_place_type: 'Casa',
        number_rooms: '3',
        buy_time: undefined,
        number_parking: '1',
        area: '120',
        stratum: '3'
      },
      {
        id: '5',
        name: 'San Fernando',
        living_place_type: 'Apartamento',
        number_rooms: '3',
        buy_time: undefined,
        number_parking: '2',
        area: '100',
        stratum: '3'
      },
      {
        id: '6',
        name: 'La esmeralda',
        living_place_type: 'Apartamento',
        number_rooms: '3',
        buy_time: undefined,
        number_parking: '2',
        area: '120',
        stratum: '3'
      },
      {
        id: '7',
        name: 'Bosa',
        living_place_type: 'Apartamento',
        number_rooms: '3',
        buy_time: undefined,
        number_parking: '2',
        area: '45',
        stratum: '3'
      },
      {
        id: '8',
        name: 'Masuren',
        living_place_type: 'Apartamento',
        number_rooms: '2',
        buy_time: undefined,
        number_parking: '1',
        area: '65',
        stratum: '5'
      },
      {
        id: '9',
        name: 'Victoria Norte',
        living_place_type: 'Apartamento',
        number_rooms: '2',
        buy_time: undefined,
        number_parking: '1',
        area: '65',
        stratum: '4'
      },
      {
        id: '10',
        name: 'Mesopotamia',
        living_place_type: 'Apartamento',
        number_rooms: '3',
        buy_time: undefined,
        number_parking: '2',
        area: '76',
        stratum: '3'
      }
    ]
  }

  init(data);
  

