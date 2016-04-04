"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class OrcishSettlers extends Card {
  constructor(game) {
    super(game, "Orcish Settlers", "Weatherlight", "WTH");
  }
}

module.exports = OrcishSettlers;
