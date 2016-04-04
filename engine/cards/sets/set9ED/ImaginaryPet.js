"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ImaginaryPet extends Card {
  constructor(game) {
    super(game, "Imaginary Pet", "Ninth Edition", "9ED");
  }
}

module.exports = ImaginaryPet;
