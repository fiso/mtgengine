"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImaginaryPet extends UnimplementedCard {
  constructor (game) {
    super(game, "Imaginary Pet", "Ninth Edition", "9ED");
  }
}

module.exports = ImaginaryPet;
