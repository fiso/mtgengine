"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EladamrisCall extends UnimplementedCard {
  constructor(game) {
    super(game, "Eladamri's Call", "Planeshift", "PLS");
  }
}

module.exports = EladamrisCall;
