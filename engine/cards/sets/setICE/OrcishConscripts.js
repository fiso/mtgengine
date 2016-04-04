"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrcishConscriptsBase = require("../set5ED/OrcishConscripts.js");

class OrcishConscripts extends OrcishConscriptsBase {
  constructor(game) {
    super(game, "Orcish Conscripts", "Ice Age", "ICE");
  }
}

module.exports = OrcishConscripts;
