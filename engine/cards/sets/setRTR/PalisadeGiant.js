"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PalisadeGiant extends Card {
  constructor(game) {
    super(game, "Palisade Giant", "Return to Ravnica", "RTR");
  }
}

module.exports = PalisadeGiant;
