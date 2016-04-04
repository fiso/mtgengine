"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianBarbariansBase = require("../set6ED/BalduvianBarbarians.js");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor(game) {
    super(game, "Balduvian Barbarians", "Ice Age", "ICE");
  }
}

module.exports = BalduvianBarbarians;
