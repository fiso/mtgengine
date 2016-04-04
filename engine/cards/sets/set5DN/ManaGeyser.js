"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaGeyser extends Card {
  constructor(game) {
    super(game, "Mana Geyser", "Fifth Dawn", "5DN");
  }
}

module.exports = ManaGeyser;
