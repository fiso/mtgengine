"use strict";
const Constants = require ("../../../Constants");
const BalduvianBarbariansBase = require("../set9ED/BalduvianBarbarians");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor (game) {
    super(game, "Balduvian Barbarians", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BalduvianBarbarians;
