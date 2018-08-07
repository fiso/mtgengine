"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeiTakahashi extends UnimplementedCard {
  constructor (game) {
    super(game, "Kei Takahashi", "Masters Edition III", "ME3");
  }
}

module.exports = KeiTakahashi;
