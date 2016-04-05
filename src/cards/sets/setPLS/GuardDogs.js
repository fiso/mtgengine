"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuardDogs extends UnimplementedCard {
  constructor(game) {
    super(game, "Guard Dogs", "Planeshift", "PLS");
  }
}

module.exports = GuardDogs;
