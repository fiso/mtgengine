"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CharcoalDiamond extends UnimplementedCard {
  constructor (game) {
    super(game, "Charcoal Diamond", "Commander 2014", "C14");
  }
}

module.exports = CharcoalDiamond;
