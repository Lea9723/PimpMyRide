//1.nom du client
//2.l'heure de départ du vol
//3.la durée du vol
//4.le prix

//ex  : let trip =  "Perdita(nom du client) 8(l'heure de départ) 10(la durée de vol) 8(le prix)"
//  Créer une fonction parseTrip(trip) qui prend une ligne du même format que les lignes de l'exemple, la décompose en mot (séparés par un espace)
// puis range ces mots dans une structure de données que vous déterminerez.



const parseTrip = (stringTrip) =>{

    // let array = [];
   return stringTrip.split(" ")
};

// console.log(parseTrip("Amelie 6 24 2"))



// -----------------------------------------------------------------

let tripsToParse =  [
    "Roger 0 5 10",
	"Pongo 3 7 14",
	"Perdita 8 10 8",
	"Anita 16 3 7"
]

const parseTripS = (array) =>{
    let newArray = [];
    for(let i=0; i<array.length; i++){
       newArray.push(parseTrip(array[i]))  
    }
    return newArray
}; 

 console.log(parseTripS(tripsToParse))



// --------------------------------------------------------------------------------------------------------------------------------------
// calculer l'enchainement de clients le plus intéressant.
// Creer une fonction getTripsPrice qui accepte en argument une liste de voyages et retourne la somme des prix
// de cet ensemble de voyages

const getTripsPrice = (arrayTrips)=>{
   let newTripList=  parseTripS(arrayTrips);
    let price = 0;
    for(let i=0; i<newTripList.length; i++){
         price+= parseInt(newTripList[i][3])  
        }
      return price
    }
    
;
console.log(getTripsPrice(tripsToParse))

// ----------------------------------------------------------------------------------------------------------------------------------------

const checkCompatibility = (tripA,tripB)=>{
    tripA = parseTrip(tripA);
    tripB = parseTrip(tripB);
    const arrivalA = parseInt(tripA[1]) + parseInt(tripA[2]);
    const arrivalB = parseInt(tripB[1]) + parseInt(tripB[2]);
    
    return arrivalA<tripB[1]
};
console.log(checkCompatibility("Pongo 3 7 14","Roger 1 5 10"))
// ----------------------------------------------------------------------------------------------------------------------------------------

