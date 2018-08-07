"use strict";
const Constants = require ("../../../Constants");
const BroodstarBase = require("../setHOP/Broodstar");

class Broodstar extends BroodstarBase {
  constructor (game) {
    super(game, "Broodstar", "Mirrodin", "MRD");
  }
}

module.exports = Broodstar;
