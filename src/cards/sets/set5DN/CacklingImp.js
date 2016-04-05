"use strict";
const Constants = require ("../../../Constants");
const CacklingImpBase = require("../setDD3_DVD/CacklingImp");

class CacklingImp extends CacklingImpBase {
  constructor(game) {
    super(game, "Cackling Imp", "Fifth Dawn", "5DN");
  }
}

module.exports = CacklingImp;
