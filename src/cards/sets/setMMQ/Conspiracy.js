"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Conspiracy extends UnimplementedCard {
  constructor(game) {
    super(game, "Conspiracy", "Mercadian Masques", "MMQ");
  }
}

module.exports = Conspiracy;
