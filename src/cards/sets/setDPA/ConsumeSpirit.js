"use strict";
const Constants = require ("../../../Constants");
const ConsumeSpiritBase = require("../setDVD/ConsumeSpirit");

class ConsumeSpirit extends ConsumeSpiritBase {
  constructor (game) {
    super(game, "Consume Spirit", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = ConsumeSpirit;
