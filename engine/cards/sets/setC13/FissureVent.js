"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FissureVent extends UnimplementedCard {
  constructor(game) {
    super(game, "Fissure Vent", "Commander 2013 Edition", "C13");
  }
}

module.exports = FissureVent;
