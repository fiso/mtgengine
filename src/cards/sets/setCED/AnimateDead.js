"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AnimateDead extends UnimplementedCard {
  constructor (game) {
    super(game, "Animate Dead", "Collector's Edition", "CED");
  }
}

module.exports = AnimateDead;
