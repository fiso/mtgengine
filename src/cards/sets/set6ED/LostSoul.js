"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LostSoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Lost Soul", "Classic Sixth Edition", "6ED");
  }
}

module.exports = LostSoul;
