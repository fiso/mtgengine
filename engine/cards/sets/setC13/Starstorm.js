"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Starstorm extends UnimplementedCard {
  constructor(game) {
    super(game, "Starstorm", "Commander 2013 Edition", "C13");
  }
}

module.exports = Starstorm;
