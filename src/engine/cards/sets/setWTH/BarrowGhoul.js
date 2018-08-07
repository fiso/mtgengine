"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarrowGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Barrow Ghoul", "Weatherlight", "WTH");
  }
}

module.exports = BarrowGhoul;
