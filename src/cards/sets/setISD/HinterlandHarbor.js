"use strict";
const Constants = require ("../../../Constants");
const HinterlandHarborBase = require("../setDOM/HinterlandHarbor");

class HinterlandHarbor extends HinterlandHarborBase {
  constructor (game) {
    super(game, "Hinterland Harbor", "Innistrad", "ISD");
  }
}

module.exports = HinterlandHarbor;
