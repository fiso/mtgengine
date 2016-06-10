"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HeartofRamos extends UnimplementedCard {
  constructor (game) {
    super(game, "Heart of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = HeartofRamos;
