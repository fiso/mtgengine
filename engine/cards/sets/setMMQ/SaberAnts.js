"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SaberAnts extends UnimplementedCard {
  constructor(game) {
    super(game, "Saber Ants", "Mercadian Masques", "MMQ");
  }
}

module.exports = SaberAnts;
