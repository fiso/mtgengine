"use strict";
const Constants = require ("../../../Constants");
const ElvishVisionaryBase = require("../setBBD/ElvishVisionary");

class ElvishVisionary extends ElvishVisionaryBase {
  constructor (game) {
    super(game, "Elvish Visionary", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ElvishVisionary;
