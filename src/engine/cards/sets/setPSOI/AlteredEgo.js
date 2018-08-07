"use strict";
const Constants = require ("../../../Constants");
const AlteredEgoBase = require("../setSOI/AlteredEgo");

class AlteredEgo extends AlteredEgoBase {
  constructor (game) {
    super(game, "Altered Ego", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = AlteredEgo;
