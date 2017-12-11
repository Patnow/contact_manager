//CONTACT MANAGER
/*------------------------VARIABLES------------------------*/
/**
 * The basic contact list
 * @type {Array}
 */
var contactList = [
    ["LÉVISSE", "Carole"],
    ["NELSONNE", "Mélodie"]
];

/*------------------------PROTOTYPES------------------------*/

//Contact class
var Contact = {

    /**
     * Create an instance of Contact
     *
     * @constructor
     * @param  {String} lastName    Last name
     * @param  {String} firstName first name
     * @this {Contact}
     */
    creation: function (lastName, firstName) {
        this.lastName = lastName;
        this.firstName = firstName;
    },



    /**
     * Create a an array with the attributes
     * @this {Contact}
     * @return {array} the array returned
     */
    createFile: function () {
        var file = [this.lastName, this.firstName];
        return file;
    }
}


  /**
   * Prototype who allow us to add new array in the array contactList and
   * to print its contents
   * @type {Object}
   */
var List = {

    /**
     * To add a new contact to the contactList
     * @param  {array} contactToAdd the contact to add
     */
    add: function(contactToAdd) {
        contactList.push(contactToAdd);
    },

     /**
     * To print on screen each elements of each array in contactList
     */
    print: function() {
        console.log("Voici la liste de tous vos contacts : ");
        contactList.forEach(function(person) {
            console.log("lastName : "+person[0]+", firstName : "+person[1]);
        })
    }
}


/**
 * Prototype that contains all algorithmn of this contact manager
 * @type {Object}
 */
var ContactManager = {

    /**
     * To welcome user with a message
     */
    welcome: function() {
        console.log ("Bienvenue dans le gestionnaire de contact");
    },

    /**
     * To show users all the options available and ask them to choose an option
     * @return {integer} an integer corresponding to options
     */
    interrogate: function() {
        console.log(" ---------------------------------------------------- ");
        console.log("1 : Lister les contacts");
        console.log("2 : Ajouter un contact");
        console.log("0 : Quitter");
        console.log(" ");
        var choice = Number(prompt("Choississez une option :"));
        return choice;
    },

    /**
     * Containing the main algorithmn of the contact manager
     * @this {ContactManager}
     */
    choose: function() {

        /**
         * Creation of a new list
         * @type {List}
         */
        var newList = Object.create(List);

         /**
         * Stocking user's choice in the variable choice
         * @type {int}
         */
        var choice = this.interrogate();

        /**
         * Main algorithmn of the contact manager : behavior of this program
         * depending on user's choice
         * @param  {int} choice user's choice
         */
        while (choice !== 0) {

          switch (choice) {

            /**
             * If choice is 1, print the contact list
             */
            case 1:
              newList.print();
              break;

            /**
             * If choice is 2, add a new contact
             */
            case 2:
              var lastName = prompt("Entrez le nom du nouveau contact:").toUpperCase();
              var firstName = prompt("Entrez le prénom du nouveau contact:");
              var newContact = Object.create(Contact);
              newContact.creation(lastName, firstName);
              newList.add(newContact.createFile());
              console.log("Le nouveau contact a été ajouté");
              break;

            /**
             * Otherwise, error message
             */
            default:
              console.log("Votre saisie n'est pas correcte. Saisissez à nouveau.");
          }

          /**
           * If choice is not 1, 2 or 0, the program will ask for user's choice
           * again
           */
          choice = this.interrogate();
        }
        console.log("Au revoir");
    }
}


/*------------------------OPERATION------------------------*/
/*Every prototypes are created. Now, the program just need to instanciate one
new object ContactManager to run*/
var newDirectory = Object.create(ContactManager);
newDirectory.welcome();
newDirectory.choose();
