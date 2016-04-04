"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StompingGround extends Card {
  constructor(game) {
    super(game, "Stomping Ground", "Gatecrash", "GTC");
  }
}

module.exports = StompingGround;
