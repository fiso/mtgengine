"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VirulentSliver extends Card {
  constructor(game) {
    super(game, "Virulent Sliver", "Future Sight", "FUT");
  }
}

module.exports = VirulentSliver;
