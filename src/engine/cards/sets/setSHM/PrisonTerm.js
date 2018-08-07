"use strict";
const Constants = require ("../../../Constants");
const PrisonTermBase = require("../setCMD/PrisonTerm");

class PrisonTerm extends PrisonTermBase {
  constructor (game) {
    super(game, "Prison Term", "Shadowmoor", "SHM");
  }
}

module.exports = PrisonTerm;
