"use strict";
const Constants = require ("../../../Constants");
const BlessedWineBase = require("../set5ED/BlessedWine");

class BlessedWine extends BlessedWineBase {
  constructor (game) {
    super(game, "Blessed Wine", "Ice Age", "ICE");
  }
}

module.exports = BlessedWine;
