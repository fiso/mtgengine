"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindsofChange extends UnimplementedCard {
  constructor (game) {
    super(game, "Winds of Change", "Masters Edition", "MED");
  }
}

module.exports = WindsofChange;
