"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RepeatingBarrage extends UnimplementedCard {
  constructor (game) {
    super(game, "Repeating Barrage", "Ixalan", "XLN");
  }
}

module.exports = RepeatingBarrage;
