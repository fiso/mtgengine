"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ManaGeyserBase = require("../set5DN/ManaGeyser.js");

class ManaGeyser extends ManaGeyserBase {
  constructor(game) {
    super(game, "Mana Geyser", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ManaGeyser;
