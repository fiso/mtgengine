"use strict";
const Constants = require ("../../../Constants");
const ThalakosScoutBase = require("../setEXO/ThalakosScout");

class ThalakosScout extends ThalakosScoutBase {
  constructor (game) {
    super(game, "Thalakos Scout", "Tempest Remastered", "TPR");
  }
}

module.exports = ThalakosScout;
