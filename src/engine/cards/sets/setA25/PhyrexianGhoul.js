"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Phyrexian Ghoul", "Masters 25", "A25");
  }
}

module.exports = PhyrexianGhoul;
