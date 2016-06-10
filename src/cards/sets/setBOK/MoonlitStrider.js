"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonlitStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Moonlit Strider", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = MoonlitStrider;
