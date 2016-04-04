"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BalduvianBarbarians extends Card {
  constructor(game) {
    super(game, "Balduvian Barbarians", "Classic Sixth Edition", "6ED");
  }
}

module.exports = BalduvianBarbarians;
