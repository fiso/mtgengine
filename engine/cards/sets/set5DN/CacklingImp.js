"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CacklingImpBase = require("../setDD3_DVD/CacklingImp.js");

class CacklingImp extends CacklingImpBase {
  constructor(game) {
    super(game, "Cackling Imp", "Fifth Dawn", "5DN");
  }
}

module.exports = CacklingImp;
