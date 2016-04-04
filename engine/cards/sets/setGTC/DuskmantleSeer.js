"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DuskmantleSeer extends Card {
  constructor(game) {
    super(game, "Duskmantle Seer", "Gatecrash", "GTC");
  }
}

module.exports = DuskmantleSeer;
