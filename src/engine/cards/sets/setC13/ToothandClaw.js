"use strict";
const Constants = require ("../../../Constants");
const ToothandClawBase = require("../setEMA/ToothandClaw");

class ToothandClaw extends ToothandClawBase {
  constructor (game) {
    super(game, "Tooth and Claw", "Commander 2013", "C13");
  }
}

module.exports = ToothandClaw;
