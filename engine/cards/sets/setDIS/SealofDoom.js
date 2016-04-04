"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SealofDoomBase = require("../setC15/SealofDoom.js");

class SealofDoom extends SealofDoomBase {
  constructor(game) {
    super(game, "Seal of Doom", "Dissension", "DIS");
  }
}

module.exports = SealofDoom;
