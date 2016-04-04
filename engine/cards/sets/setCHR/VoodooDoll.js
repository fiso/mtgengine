"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VoodooDoll extends Card {
  constructor(game) {
    super(game, "Voodoo Doll", "Chronicles", "CHR");
  }
}

module.exports = VoodooDoll;
