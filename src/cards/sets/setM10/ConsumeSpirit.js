"use strict";
const Constants = require ("../../../Constants");
const ConsumeSpiritBase = require("../setDVD/ConsumeSpirit");

class ConsumeSpirit extends ConsumeSpiritBase {
  constructor (game) {
    super(game, "Consume Spirit", "Magic 2010", "M10");
  }
}

module.exports = ConsumeSpirit;
