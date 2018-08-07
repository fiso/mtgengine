"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Warpath extends UnimplementedCard {
  constructor (game) {
    super(game, "Warpath", "Mercadian Masques", "MMQ");
  }
}

module.exports = Warpath;
