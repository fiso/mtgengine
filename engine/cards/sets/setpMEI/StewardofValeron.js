"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StewardofValeronBase = require("../setDDG/StewardofValeron.js");

class StewardofValeron extends StewardofValeronBase {
  constructor(game) {
    super(game, "Steward of Valeron", "Media Inserts", "pMEI");
  }
}

module.exports = StewardofValeron;
