"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimianGrunts extends Card {
  constructor(game) {
    super(game, "Simian Grunts", "Urza's Legacy", "ULG");
  }
}

module.exports = SimianGrunts;
