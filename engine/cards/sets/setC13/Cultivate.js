"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cultivate extends UnimplementedCard {
  constructor(game) {
    super(game, "Cultivate", "Commander 2013 Edition", "C13");
  }
}

module.exports = Cultivate;
