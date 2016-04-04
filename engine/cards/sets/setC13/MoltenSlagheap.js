"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoltenSlagheap extends Card {
  constructor(game) {
    super(game, "Molten Slagheap", "Commander 2013 Edition", "C13");
  }
}

module.exports = MoltenSlagheap;
