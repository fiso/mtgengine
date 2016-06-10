"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thwart extends UnimplementedCard {
  constructor (game) {
    super(game, "Thwart", "Mercadian Masques", "MMQ");
  }
}

module.exports = Thwart;
