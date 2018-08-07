"use strict";
const Constants = require ("../../../Constants");
const BalduvianBarbariansBase = require("../set9ED/BalduvianBarbarians");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor (game) {
    super(game, "Balduvian Barbarians", "Ice Age", "ICE");
  }
}

module.exports = BalduvianBarbarians;
