"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ClanDefiance extends Card {
  constructor(game) {
    super(game, "Clan Defiance", "Gatecrash", "GTC");
  }
}

module.exports = ClanDefiance;
