"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MinotaurExplorer extends Card {
  constructor(game) {
    super(game, "Minotaur Explorer", "Odyssey", "ODY");
  }
}

module.exports = MinotaurExplorer;
