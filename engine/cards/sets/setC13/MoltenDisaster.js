"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenDisaster extends Card {
  constructor(game) {
    super(game, "Molten Disaster", "Commander 2013 Edition", "C13");
  }
}

module.exports = MoltenDisaster;
