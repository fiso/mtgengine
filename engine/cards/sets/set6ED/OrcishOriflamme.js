"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishOriflamme extends Card {
  constructor(game) {
    super(game, "Orcish Oriflamme", "Classic Sixth Edition", "6ED");
  }
}

module.exports = OrcishOriflamme;
