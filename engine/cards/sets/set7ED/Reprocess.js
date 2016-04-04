"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Reprocess extends Card {
  constructor(game) {
    super(game, "Reprocess", "Seventh Edition", "7ED");
  }
}

module.exports = Reprocess;
