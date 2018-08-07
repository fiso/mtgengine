"use strict";
const Constants = require ("../../../Constants");
const ThalakosScoutBase = require("../setTPR/ThalakosScout");

class ThalakosScout extends ThalakosScoutBase {
  constructor (game) {
    super(game, "Thalakos Scout", "Exodus", "EXO");
  }
}

module.exports = ThalakosScout;
