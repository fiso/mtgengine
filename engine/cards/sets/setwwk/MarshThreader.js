"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MarshThreader extends Card {
  constructor(game) {
    super(game, "Marsh Threader", "Worldwake", "WWK");
  }
}

module.exports = MarshThreader;
