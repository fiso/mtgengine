"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Crash extends UnimplementedCard {
  constructor (game) {
    super(game, "Crash", "Mercadian Masques", "MMQ");
  }
}

module.exports = Crash;
