"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simulacrum extends UnimplementedCard {
  constructor (game) {
    super(game, "Simulacrum", "Fourth Edition", "4ED");
  }
}

module.exports = Simulacrum;
