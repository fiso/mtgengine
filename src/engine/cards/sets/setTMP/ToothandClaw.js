"use strict";
const Constants = require ("../../../Constants");
const ToothandClawBase = require("../setEMA/ToothandClaw");

class ToothandClaw extends ToothandClawBase {
  constructor (game) {
    super(game, "Tooth and Claw", "Tempest", "TMP");
  }
}

module.exports = ToothandClaw;
