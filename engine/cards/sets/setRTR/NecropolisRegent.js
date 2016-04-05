"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NecropolisRegent extends UnimplementedCard {
  constructor(game) {
    super(game, "Necropolis Regent", "Return to Ravnica", "RTR");
  }
}

module.exports = NecropolisRegent;
