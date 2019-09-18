let favoriteCityId ='rome';

//console.log(favoriteCityId)

favoriteCityId='paris'
console.log(favoriteCityId)

function getWeather (cityId) {

     let city =cityId.toUpperCase();
     let temperature = 20;

     return {city,temperature}
}

const weather=getWeather('paris');

//console.log(weather)

let {city,temperature}=weather;
//console.log(city)
//console.log(temperature)

const citiesId=["paris", "nyc", "rome", "rio-de-janeiro"];
let [parisId,nycId ,...tousLesAutres]=citiesId;
//console.log(parisId)
//console.log(nycId)
//console.log(tousLesAutres)

class Trip {
    constructor(id,name,imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
    }

    toString(){
        return 'Trip ['+this.id +','+this.name +','+this.imageUrl+','+this._price +']'
    }

    static getDefaultTrip(){
        return new Trip('rio-de-janeiro','Rio de Janeiro','img/rio-de-janeiro.jpg')
    }

    get price(){
        return this._price;
    }

    set price(newAge) {
        this._price = newAge;
    }
}

class FreeTrip extends Trip {
    
    constructor(id,name,imageUrl){
        super(id,name,imageUrl);
        this.price=0;
    }

    toString(){
        return 'Free'+ super.toString()
    }
    
}

let parisTrip =new Trip('paris','Paris','img/paris.jpg');
//console.log(parisTrip)
//console.log(parisTrip.name)
//console.log(parisTrip.toString())

parisTrip.price=100;
//console.log(parisTrip.toString())

const defaultTrip=Trip.getDefaultTrip()
//console.log(defaultTrip.toString())

const freeTrip=new FreeTrip('nantes','Nantes','img/nantes.jpg')

console.log(freeTrip.toString());


class TripService {

    constructor() {
        // TODO Set of 3 trips
        //
        this.setTripService=new Set();
        this.setTripService.add(new Trip('paris', 'Paris', 'img/paris.jpg'))
        this.setTripService.add(new Trip('nantes', 'Nantes', 'img/nantes.jpg'))
        this.setTripService.add(new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg'))
       }

    findByName(tripName) {

         return new Promise((resolve, reject) => {

             setTimeout( () => {
                 // ici l'exécution du code est asynchrone
                for (let trip of this.setTripService) {
                    if(tripName === trip.name) {
                        resolve(trip);
                        break;
                    }
                }
                reject('pas de trip avec le nom : ')
                 // TODO utiliser resolve et reject en fonction du résultat de la recherche

             }, 2000)
        });
    }
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips

        let mapPriceService=new Map();
        mapPriceService.set('paris',100)
        mapPriceService.set('rio-de-janeiro',800)

        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
    }

    findPriceByTripId(tripId) {

       return new Promise((resolve, reject) => {

                    setTimeout( () => {
                        // ici l'exécution du code est asynchrone

                        // TODO utiliser resolve et reject en fonction du résultat de la recherche

                    }, 2000)
               });
    }
}

const ts = new TripService();

ts.findByName('Paris')
    .then(trip => console.log('hoora', trip))
    .catch(err => console.log('oops', err))





