"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BalduvianBarbariansBase = require("../set6ED/BalduvianBarbarians.js");

class BalduvianBarbarians extends BalduvianBarbariansBase {
  constructor(game) {
    super(game, "Balduvian Barbarians", "Ninth Edition", "9ED");
  }
}

module.exports = BalduvianBarbarians;
