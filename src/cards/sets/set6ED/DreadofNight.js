"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreadofNight extends UnimplementedCard {
  constructor (game) {
    super(game, "Dread of Night", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DreadofNight;
