"use strict";
const Constants = require ("../../../Constants");
const DeepcavernImpBase = require("../setFUT/DeepcavernImp");

class DeepcavernImp extends DeepcavernImpBase {
  constructor (game) {
    super(game, "Deepcavern Imp", "Modern Masters", "MMA");
  }
}

module.exports = DeepcavernImp;
