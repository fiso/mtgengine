"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VeteranCavalier extends Card {
  constructor(game) {
    super(game, "Veteran Cavalier", "Ninth Edition", "9ED");
  }
}

module.exports = VeteranCavalier;
