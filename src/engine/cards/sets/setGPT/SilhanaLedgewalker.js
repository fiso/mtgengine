"use strict";
const Constants = require ("../../../Constants");
const SilhanaLedgewalkerBase = require("../setPCA/SilhanaLedgewalker");

class SilhanaLedgewalker extends SilhanaLedgewalkerBase {
  constructor (game) {
    super(game, "Silhana Ledgewalker", "Guildpact", "GPT");
  }
}

module.exports = SilhanaLedgewalker;
