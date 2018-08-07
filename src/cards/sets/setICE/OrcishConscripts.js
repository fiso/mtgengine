"use strict";
const Constants = require ("../../../Constants");
const OrcishConscriptsBase = require("../setME2/OrcishConscripts");

class OrcishConscripts extends OrcishConscriptsBase {
  constructor (game) {
    super(game, "Orcish Conscripts", "Ice Age", "ICE");
  }
}

module.exports = OrcishConscripts;
