"use strict";
const Constants = require ("../../../Constants");
const MayorofAvabruckHowlpackAlphaBase = require("../setISD/MayorofAvabruckHowlpackAlpha");

class MayorofAvabruckHowlpackAlpha extends MayorofAvabruckHowlpackAlphaBase {
  constructor (game) {
    super(game, "Mayor of Avabruck // Howlpack Alpha", "Magic Online Promos", "PRM");
  }
}

module.exports = MayorofAvabruckHowlpackAlpha;
