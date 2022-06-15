import CasaCreator from "./Casa";
import DepartamentoCreator from "./Departamento";
import InmuebleCreator from "./Creator";

/**
 * The client code works with an instance of a concrete creator, albeit through
 * its base interface. As long as the client keeps working with the creator via
 * the base interface, you can pass it any creator's subclass.
 */
function clientCode(creator: InmuebleCreator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
}

/**
 * The Application picks a creator's type depending on the configuration or
 * environment.
 */
export function main(){
console.log('App: Launched with the CasaCreator.');
clientCode(new CasaCreator());
console.log('');

console.log('App: Launched with the DepartamentoCreator.');
clientCode(new DepartamentoCreator());
}