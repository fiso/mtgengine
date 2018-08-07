"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Embargo extends UnimplementedCard {
  constructor (game) {
    super(game, "Embargo", "Mercadian Masques", "MMQ");
  }
}

module.exports = Embargo;
