"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Brushland extends Card {
  constructor(game) {
    super(game, "Brushland", "Anthologies", "ATH");
  }
}

module.exports = Brushland;
