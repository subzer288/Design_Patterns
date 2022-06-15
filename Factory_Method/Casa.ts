import InmuebleCreator from "./Creator";

/**
 * Concrete Creators override the factory method in order to change the
 * resulting product's type.
 */
export default class CasaCreator extends InmuebleCreator {
     /**
     * Note that the signature of the method still uses the abstract product
     * type, even though the concrete product is actually returned from the
     * method. This way the Creator can stay independent of concrete product
     * classes.
     */
    public factoryMethod(): Inmueble {
        return new Casa();
    }
}
/**
 * Concrete Products provide various implementations of the Product interface.
 */
class Casa implements Inmueble {
    public operation(): string {
        return '{Result of the Casa}';
    }
}