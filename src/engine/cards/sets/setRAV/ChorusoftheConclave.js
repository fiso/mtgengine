"use strict";
const Constants = require ("../../../Constants");
const ChorusoftheConclaveBase = require("../setCMD/ChorusoftheConclave");

class ChorusoftheConclave extends ChorusoftheConclaveBase {
  constructor (game) {
    super(game, "Chorus of the Conclave", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ChorusoftheConclave;
