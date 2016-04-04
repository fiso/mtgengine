"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PlagueRats extends Card {
  constructor(game) {
    super(game, "Plague Rats", "Collector's Edition", "CED");
  }
}

module.exports = PlagueRats;
