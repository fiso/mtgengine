"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Brawl extends UnimplementedCard {
  constructor(game) {
    super(game, "Brawl", "Mercadian Masques", "MMQ");
  }
}

module.exports = Brawl;
