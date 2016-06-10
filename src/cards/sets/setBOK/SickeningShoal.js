"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SickeningShoal extends UnimplementedCard {
  constructor (game) {
    super(game, "Sickening Shoal", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SickeningShoal;
