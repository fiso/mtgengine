"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PhyrexianGhoul extends Card {
  constructor(game) {
    super(game, "Phyrexian Ghoul", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PhyrexianGhoul;
