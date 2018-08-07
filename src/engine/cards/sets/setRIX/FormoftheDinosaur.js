"use strict";
const Constants = require ("../../../Constants");
const FormoftheDinosaurBase = require("../setPRIX/FormoftheDinosaur");

class FormoftheDinosaur extends FormoftheDinosaurBase {
  constructor (game) {
    super(game, "Form of the Dinosaur", "Rivals of Ixalan", "RIX");
  }
}

module.exports = FormoftheDinosaur;
