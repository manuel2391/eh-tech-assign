
class Validations {

    validateUrl(value:string):boolean {
        try {
            new URL(value);
            return true;
          } catch (TypeError) {
            return false;
          }
    }


}

const utilValidation = new Validations();

export default utilValidation; 