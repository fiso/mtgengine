"use strict";
const Constants = require ("../../../Constants");
const KeldonMaraudersBase = require("../setEMA/KeldonMarauders");

class KeldonMarauders extends KeldonMaraudersBase {
  constructor (game) {
    super(game, "Keldon Marauders", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = KeldonMarauders;
