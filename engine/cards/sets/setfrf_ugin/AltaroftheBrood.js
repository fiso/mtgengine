"use strict";
const Constants = require ("../../../Constants");
const AltaroftheBroodBase = require("../setKTK/AltaroftheBrood");

class AltaroftheBrood extends AltaroftheBroodBase {
  constructor(game) {
    super(game, "Altar of the Brood", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = AltaroftheBrood;
