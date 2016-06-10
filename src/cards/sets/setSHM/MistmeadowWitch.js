"use strict";
const Constants = require ("../../../Constants");
const MistmeadowWitchBase = require("../setC13/MistmeadowWitch");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor (game) {
    super(game, "Mistmeadow Witch", "Shadowmoor", "SHM");
  }
}

module.exports = MistmeadowWitch;
