"use strict";
const Constants = require ("../../../Constants");
const HellionEruptionBase = require("../setPCA/HellionEruption");

class HellionEruption extends HellionEruptionBase {
  constructor (game) {
    super(game, "Hellion Eruption", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = HellionEruption;
