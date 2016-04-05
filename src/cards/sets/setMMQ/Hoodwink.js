"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hoodwink extends UnimplementedCard {
  constructor(game) {
    super(game, "Hoodwink", "Mercadian Masques", "MMQ");
  }
}

module.exports = Hoodwink;
