"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AmberPrison extends UnimplementedCard {
  constructor(game) {
    super(game, "Amber Prison", "Classic Sixth Edition", "6ED");
  }
}

module.exports = AmberPrison;
