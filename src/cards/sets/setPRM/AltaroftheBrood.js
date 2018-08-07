"use strict";
const Constants = require ("../../../Constants");
const AltaroftheBroodBase = require("../setUGIN/AltaroftheBrood");

class AltaroftheBrood extends AltaroftheBroodBase {
  constructor (game) {
    super(game, "Altar of the Brood", "Magic Online Promos", "PRM");
  }
}

module.exports = AltaroftheBrood;
