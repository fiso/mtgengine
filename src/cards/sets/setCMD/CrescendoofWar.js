"use strict";
const Constants = require ("../../../Constants");
const CrescendoofWarBase = require("../setVMA/CrescendoofWar");

class CrescendoofWar extends CrescendoofWarBase {
  constructor (game) {
    super(game, "Crescendo of War", "Commander 2011", "CMD");
  }
}

module.exports = CrescendoofWar;
