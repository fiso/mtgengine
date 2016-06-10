"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SoulStrings extends UnimplementedCard {
  constructor (game) {
    super(game, "Soul Strings", "Prophecy", "PCY");
  }
}

module.exports = SoulStrings;
