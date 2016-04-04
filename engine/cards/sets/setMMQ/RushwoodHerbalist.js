"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RushwoodHerbalist extends UnimplementedCard {
  constructor(game) {
    super(game, "Rushwood Herbalist", "Mercadian Masques", "MMQ");
  }
}

module.exports = RushwoodHerbalist;
