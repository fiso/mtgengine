"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticGenesis extends Card {
  constructor(game) {
    super(game, "Mystic Genesis", "Gatecrash", "GTC");
  }
}

module.exports = MysticGenesis;
