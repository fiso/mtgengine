"use strict";
const Constants = require ("../../../Constants");
const MistformUltimusBase = require("../setTSB/MistformUltimus");

class MistformUltimus extends MistformUltimusBase {
  constructor (game) {
    super(game, "Mistform Ultimus", "Legions", "LGN");
  }
}

module.exports = MistformUltimus;
