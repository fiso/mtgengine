"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlazingShoal extends UnimplementedCard {
  constructor (game) {
    super(game, "Blazing Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = BlazingShoal;
