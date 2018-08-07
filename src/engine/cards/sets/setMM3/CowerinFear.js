"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CowerinFear extends UnimplementedCard {
  constructor (game) {
    super(game, "Cower in Fear", "Modern Masters 2017", "MM3");
  }
}

module.exports = CowerinFear;
