"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheAbyss extends UnimplementedCard {
  constructor (game) {
    super(game, "The Abyss", "Legends", "LEG");
  }
}

module.exports = TheAbyss;
