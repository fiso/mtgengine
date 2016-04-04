"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChokingTethers extends Card {
  constructor(game) {
    super(game, "Choking Tethers", "Onslaught", "ONS");
  }
}

module.exports = ChokingTethers;
