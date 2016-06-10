"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DaringLeap extends UnimplementedCard {
  constructor (game) {
    super(game, "Daring Leap", "Planeshift", "PLS");
  }
}

module.exports = DaringLeap;
