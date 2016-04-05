"use strict";
const Constants = require ("../../../Constants");
const CrescendoofWarBase = require("../setCMD/CrescendoofWar");

class CrescendoofWar extends CrescendoofWarBase {
  constructor(game) {
    super(game, "Crescendo of War", "Vintage Masters", "VMA");
  }
}

module.exports = CrescendoofWar;
