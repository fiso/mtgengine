"use strict";
const Constants = require ("../../../Constants");
const ConsumeSpiritBase = require("../setDD3_DVD/ConsumeSpirit");

class ConsumeSpirit extends ConsumeSpiritBase {
  constructor(game) {
    super(game, "Consume Spirit", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ConsumeSpirit;
