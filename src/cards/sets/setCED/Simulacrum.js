"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Simulacrum extends UnimplementedCard {
  constructor(game) {
    super(game, "Simulacrum", "Collector's Edition", "CED");
  }
}

module.exports = Simulacrum;
