"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Insolence extends UnimplementedCard {
  constructor (game) {
    super(game, "Insolence", "Planeshift", "PLS");
  }
}

module.exports = Insolence;
