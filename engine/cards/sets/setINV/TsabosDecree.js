"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TsabosDecree extends Card {
  constructor(game) {
    super(game, "Tsabo's Decree", "Invasion", "INV");
  }
}

module.exports = TsabosDecree;
