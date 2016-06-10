"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Battle Royale Box Set", "BRB");
  }
}

module.exports = PhyrexianGhoul;
