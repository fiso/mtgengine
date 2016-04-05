"use strict";
const Constants = require ("../../../Constants");
const ManaGeyserBase = require("../set5DN/ManaGeyser");

class ManaGeyser extends ManaGeyserBase {
  constructor(game) {
    super(game, "Mana Geyser", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = ManaGeyser;
