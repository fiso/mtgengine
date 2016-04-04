"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MassiveRaid extends Card {
  constructor(game) {
    super(game, "Massive Raid", "Gatecrash", "GTC");
  }
}

module.exports = MassiveRaid;
