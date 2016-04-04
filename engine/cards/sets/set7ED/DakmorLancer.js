"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DakmorLancer extends Card {
  constructor(game) {
    super(game, "Dakmor Lancer", "Seventh Edition", "7ED");
  }
}

module.exports = DakmorLancer;
