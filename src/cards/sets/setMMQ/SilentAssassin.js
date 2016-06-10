"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilentAssassin extends UnimplementedCard {
  constructor (game) {
    super(game, "Silent Assassin", "Mercadian Masques", "MMQ");
  }
}

module.exports = SilentAssassin;
