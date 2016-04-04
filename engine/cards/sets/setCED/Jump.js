"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Jump extends Card {
  constructor(game) {
    super(game, "Jump", "Collector's Edition", "CED");
  }
}

module.exports = Jump;
