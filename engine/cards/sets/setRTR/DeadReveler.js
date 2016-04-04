"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadReveler extends UnimplementedCard {
  constructor(game) {
    super(game, "Dead Reveler", "Return to Ravnica", "RTR");
  }
}

module.exports = DeadReveler;
