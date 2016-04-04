"use strict";
const Constants = require ("../../../Constants");
const BalduvianBarbariansBase = require("../set6ED/BalduvianBarbarians");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor(game) {
    super(game, "Balduvian Barbarians", "Eighth Edition", "8ED");
  }
}

module.exports = BalduvianBarbarians;
