"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonkeyCage extends UnimplementedCard {
  constructor(game) {
    super(game, "Monkey Cage", "Mercadian Masques", "MMQ");
  }
}

module.exports = MonkeyCage;
