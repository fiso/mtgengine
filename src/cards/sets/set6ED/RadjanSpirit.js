"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RadjanSpirit extends UnimplementedCard {
  constructor (game) {
    super(game, "Radjan Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = RadjanSpirit;
