"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DuskImpBase = require("../setDD3_DVD/DuskImp.js");

class DuskImp extends DuskImpBase {
  constructor(game) {
    super(game, "Dusk Imp", "Odyssey", "ODY");
  }
}

module.exports = DuskImp;
