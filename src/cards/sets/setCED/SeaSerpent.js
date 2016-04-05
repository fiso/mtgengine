"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaSerpent extends UnimplementedCard {
  constructor(game) {
    super(game, "Sea Serpent", "Collector's Edition", "CED");
  }
}

module.exports = SeaSerpent;
