"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WindSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Wind Spirit", "Classic Sixth Edition", "6ED");
  }
}

module.exports = WindSpirit;
