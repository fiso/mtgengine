"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Squeeze extends UnimplementedCard {
  constructor (game) {
    super(game, "Squeeze", "Mercadian Masques", "MMQ");
  }
}

module.exports = Squeeze;
