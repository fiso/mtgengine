"use strict";
const Constants = require ("../../../Constants");
const MistmeadowWitchBase = require("../setCMA/MistmeadowWitch");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor (game) {
    super(game, "Mistmeadow Witch", "Commander 2013", "C13");
  }
}

module.exports = MistmeadowWitch;
