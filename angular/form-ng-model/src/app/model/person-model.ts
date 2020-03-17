/**
 * A simple model to be used in a dynamic form.
 */
export class PersonModel {
    public country: string;
    constructor(public firstName: string, public lastName: string, country: string) {
        this.country = country;
    }
}
