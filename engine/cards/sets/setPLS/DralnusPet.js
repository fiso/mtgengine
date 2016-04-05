"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DralnusPet extends UnimplementedCard {
  constructor(game) {
    super(game, "Dralnu's Pet", "Planeshift", "PLS");
  }
}

module.exports = DralnusPet;
