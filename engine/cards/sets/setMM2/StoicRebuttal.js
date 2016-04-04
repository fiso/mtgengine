"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StoicRebuttal extends Card {
  constructor(game) {
    super(game, "Stoic Rebuttal", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = StoicRebuttal;
