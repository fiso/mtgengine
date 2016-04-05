"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thunderclap extends UnimplementedCard {
  constructor(game) {
    super(game, "Thunderclap", "Mercadian Masques", "MMQ");
  }
}

module.exports = Thunderclap;
