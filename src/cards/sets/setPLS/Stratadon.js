"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Stratadon extends UnimplementedCard {
  constructor (game) {
    super(game, "Stratadon", "Planeshift", "PLS");
  }
}

module.exports = Stratadon;
