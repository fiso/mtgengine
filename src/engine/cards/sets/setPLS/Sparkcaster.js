"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Sparkcaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Sparkcaster", "Planeshift", "PLS");
  }
}

module.exports = Sparkcaster;
