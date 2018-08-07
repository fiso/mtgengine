"use strict";
const Constants = require ("../../../Constants");
const DivineReckoningBase = require("../setC17/DivineReckoning");

class DivineReckoning extends DivineReckoningBase {
  constructor (game) {
    super(game, "Divine Reckoning", "Innistrad", "ISD");
  }
}

module.exports = DivineReckoning;
