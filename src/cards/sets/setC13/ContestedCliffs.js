"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContestedCliffs extends UnimplementedCard {
  constructor(game) {
    super(game, "Contested Cliffs", "Commander 2013 Edition", "C13");
  }
}

module.exports = ContestedCliffs;
