"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PetProject extends UnimplementedCard {
  constructor (game) {
    super(game, "Pet Project", "Unstable", "UST");
  }
}

module.exports = PetProject;
