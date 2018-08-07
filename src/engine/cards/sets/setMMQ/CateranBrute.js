"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CateranBrute extends UnimplementedCard {
  constructor (game) {
    super(game, "Cateran Brute", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranBrute;
