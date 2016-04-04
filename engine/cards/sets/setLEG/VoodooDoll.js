"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoodooDollBase = require("../setCHR/VoodooDoll.js");

class VoodooDoll extends VoodooDollBase {
  constructor(game) {
    super(game, "Voodoo Doll", "Legends", "LEG");
  }
}

module.exports = VoodooDoll;
