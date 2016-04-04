"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeepcavernImpBase = require("../setFUT/DeepcavernImp.js");

class DeepcavernImp extends DeepcavernImpBase {
  constructor(game) {
    super(game, "Deepcavern Imp", "Modern Masters", "MMA");
  }
}

module.exports = DeepcavernImp;
