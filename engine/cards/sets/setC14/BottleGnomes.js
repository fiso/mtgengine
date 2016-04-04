"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BottleGnomes extends Card {
  constructor(game) {
    super(game, "Bottle Gnomes", "Commander 2014", "C14");
  }
}

module.exports = BottleGnomes;
