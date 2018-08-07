"use strict";
const Constants = require ("../../../Constants");
const MistmeadowWitchBase = require("../setCMA/MistmeadowWitch");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor (game) {
    super(game, "Mistmeadow Witch", "Modern Masters 2017", "MM3");
  }
}

module.exports = MistmeadowWitch;
