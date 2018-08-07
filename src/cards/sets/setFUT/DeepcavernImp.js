"use strict";
const Constants = require ("../../../Constants");
const DeepcavernImpBase = require("../setMMA/DeepcavernImp");

class DeepcavernImp extends DeepcavernImpBase {
  constructor (game) {
    super(game, "Deepcavern Imp", "Future Sight", "FUT");
  }
}

module.exports = DeepcavernImp;
