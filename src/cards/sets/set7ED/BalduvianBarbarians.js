"use strict";
const Constants = require ("../../../Constants");
const BalduvianBarbariansBase = require("../set9ED/BalduvianBarbarians");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor (game) {
    super(game, "Balduvian Barbarians", "Seventh Edition", "7ED");
  }
}

module.exports = BalduvianBarbarians;
