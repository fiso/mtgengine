"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CrescendoofWarBase = require("../setCMD/CrescendoofWar.js");

class CrescendoofWar extends CrescendoofWarBase {
  constructor(game) {
    super(game, "Crescendo of War", "Vintage Masters", "VMA");
  }
}

module.exports = CrescendoofWar;
