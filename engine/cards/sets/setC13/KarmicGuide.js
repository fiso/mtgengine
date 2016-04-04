"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KarmicGuide extends Card {
  constructor(game) {
    super(game, "Karmic Guide", "Commander 2013 Edition", "C13");
  }
}

module.exports = KarmicGuide;
