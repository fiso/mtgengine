"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MistmeadowWitchBase = require("../setC13/MistmeadowWitch.js");

class MistmeadowWitch extends MistmeadowWitchBase {
  constructor(game) {
    super(game, "Mistmeadow Witch", "Shadowmoor", "SHM");
  }
}

module.exports = MistmeadowWitch;
