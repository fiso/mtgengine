"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoninCavekeeper extends Card {
  constructor(game) {
    super(game, "Ronin Cavekeeper", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = RoninCavekeeper;
