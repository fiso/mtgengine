"use strict";
const Constants = require ("../../../Constants");
const HinterlandHarborBase = require("../setDOM/HinterlandHarbor");

class HinterlandHarbor extends HinterlandHarborBase {
  constructor (game) {
    super(game, "Hinterland Harbor", "Dominaria Promos", "PDOM");
  }
}

module.exports = HinterlandHarbor;
