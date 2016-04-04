"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ArmoredPegasusBase = require("../setATH/ArmoredPegasus.js");

class ArmoredPegasus extends ArmoredPegasusBase {
  constructor(game) {
    super(game, "Armored Pegasus", "Portal Demo Game", "pPOD");
  }
}

module.exports = ArmoredPegasus;
