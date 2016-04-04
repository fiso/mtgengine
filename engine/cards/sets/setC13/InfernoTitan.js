"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InfernoTitan extends Card {
  constructor(game) {
    super(game, "Inferno Titan", "Commander 2013 Edition", "C13");
  }
}

module.exports = InfernoTitan;
