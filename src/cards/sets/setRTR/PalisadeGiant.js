"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PalisadeGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Palisade Giant", "Return to Ravnica", "RTR");
  }
}

module.exports = PalisadeGiant;
