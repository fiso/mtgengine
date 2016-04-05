"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Intimidation extends UnimplementedCard {
  constructor(game) {
    super(game, "Intimidation", "Mercadian Masques", "MMQ");
  }
}

module.exports = Intimidation;
