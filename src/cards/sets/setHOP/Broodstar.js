"use strict";
const Constants = require ("../../../Constants");
const BroodstarBase = require("../setMRD/Broodstar");

class Broodstar extends BroodstarBase {
  constructor (game) {
    super(game, "Broodstar", "Planechase", "HOP");
  }
}

module.exports = Broodstar;
