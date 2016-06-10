"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharcoalDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Charcoal Diamond", "Classic Sixth Edition", "6ED");
  }
}

module.exports = CharcoalDiamond;
