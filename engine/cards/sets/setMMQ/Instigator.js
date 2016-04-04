"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Instigator extends UnimplementedCard {
  constructor(game) {
    super(game, "Instigator", "Mercadian Masques", "MMQ");
  }
}

module.exports = Instigator;
