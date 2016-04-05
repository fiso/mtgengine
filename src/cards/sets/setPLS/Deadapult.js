"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deadapult extends UnimplementedCard {
  constructor(game) {
    super(game, "Deadapult", "Planeshift", "PLS");
  }
}

module.exports = Deadapult;
