"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SyphonSoul extends Card {
  constructor(game) {
    super(game, "Syphon Soul", "Battle Royale Box Set", "BRB");
  }
}

module.exports = SyphonSoul;
