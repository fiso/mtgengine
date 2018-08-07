"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SengirNosferatu extends UnimplementedCard {
  constructor (game) {
    super(game, "Sengir Nosferatu", "Time Spiral", "TSP");
  }
}

module.exports = SengirNosferatu;
