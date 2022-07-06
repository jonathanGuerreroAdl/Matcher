exports.getDataToMatch=(data)=>{

    return data.map(builders=>{
        return builders.projects.map(projects =>{
           return { 
               id: projects.id, 
               name: projects.name, 
               living_place_type:projects.living_place_type,
               number_rooms: projects.number_rooms,
               buy_time: projects.buy_time,
               number_parking: projects.number_parking,
               area: projects.area,
               stratum: projects.stratum
           }
       })
   }).reduce((accumulator, curValue)=>  accumulator.concat(curValue),[])
  }