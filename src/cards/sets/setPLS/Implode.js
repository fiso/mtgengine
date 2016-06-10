"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Implode extends UnimplementedCard {
  constructor (game) {
    super(game, "Implode", "Planeshift", "PLS");
  }
}

module.exports = Implode;
