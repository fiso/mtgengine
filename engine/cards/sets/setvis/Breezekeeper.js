"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Breezekeeper extends Card {
  constructor(game) {
    super(game, "Breezekeeper", "Visions", "VIS");
  }
}

module.exports = Breezekeeper;
