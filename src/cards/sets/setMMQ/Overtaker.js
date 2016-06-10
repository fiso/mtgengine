"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Overtaker extends UnimplementedCard {
  constructor (game) {
    super(game, "Overtaker", "Mercadian Masques", "MMQ");
  }
}

module.exports = Overtaker;
