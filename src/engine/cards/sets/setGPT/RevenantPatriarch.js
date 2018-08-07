"use strict";
const Constants = require ("../../../Constants");
const RevenantPatriarchBase = require("../setDDK/RevenantPatriarch");

class RevenantPatriarch extends RevenantPatriarchBase {
  constructor (game) {
    super(game, "Revenant Patriarch", "Guildpact", "GPT");
  }
}

module.exports = RevenantPatriarch;
