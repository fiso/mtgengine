"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StrongarmThug extends UnimplementedCard {
  constructor(game) {
    super(game, "Strongarm Thug", "Mercadian Masques", "MMQ");
  }
}

module.exports = StrongarmThug;
