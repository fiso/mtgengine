"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VoodooDollBase = require("../setCHR/VoodooDoll.js");

class VoodooDoll extends VoodooDollBase {
  constructor(game) {
    super(game, "Voodoo Doll", "Masters Edition III", "ME3");
  }
}

module.exports = VoodooDoll;
