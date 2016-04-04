"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishSpy extends Card {
  constructor(game) {
    super(game, "Orcish Spy", "Eighth Edition", "8ED");
  }
}

module.exports = OrcishSpy;
