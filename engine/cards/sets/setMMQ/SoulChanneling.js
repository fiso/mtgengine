"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulChanneling extends UnimplementedCard {
  constructor(game) {
    super(game, "Soul Channeling", "Mercadian Masques", "MMQ");
  }
}

module.exports = SoulChanneling;
