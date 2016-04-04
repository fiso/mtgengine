"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Groundskeeper extends Card {
  constructor(game) {
    super(game, "Groundskeeper", "Mercadian Masques", "MMQ");
  }
}

module.exports = Groundskeeper;
