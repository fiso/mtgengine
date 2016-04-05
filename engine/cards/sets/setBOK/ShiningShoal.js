"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShiningShoal extends UnimplementedCard {
  constructor(game) {
    super(game, "Shining Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ShiningShoal;
