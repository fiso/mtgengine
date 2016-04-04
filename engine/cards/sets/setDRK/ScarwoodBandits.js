"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ScarwoodBanditsBase = require("../setME4/ScarwoodBandits.js");

class ScarwoodBandits extends ScarwoodBanditsBase {
  constructor(game) {
    super(game, "Scarwood Bandits", "The Dark", "DRK");
  }
}

module.exports = ScarwoodBandits;
