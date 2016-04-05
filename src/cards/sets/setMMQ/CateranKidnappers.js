"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CateranKidnappers extends UnimplementedCard {
  constructor(game) {
    super(game, "Cateran Kidnappers", "Mercadian Masques", "MMQ");
  }
}

module.exports = CateranKidnappers;
