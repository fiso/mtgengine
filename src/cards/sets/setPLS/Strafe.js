"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Strafe extends UnimplementedCard {
  constructor (game) {
    super(game, "Strafe", "Planeshift", "PLS");
  }
}

module.exports = Strafe;
