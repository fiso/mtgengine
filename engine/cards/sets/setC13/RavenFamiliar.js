"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RavenFamiliar extends UnimplementedCard {
  constructor(game) {
    super(game, "Raven Familiar", "Commander 2013 Edition", "C13");
  }
}

module.exports = RavenFamiliar;
