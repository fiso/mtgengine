"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FrenzySliver extends Card {
  constructor(game) {
    super(game, "Frenzy Sliver", "Future Sight", "FUT");
  }
}

module.exports = FrenzySliver;
