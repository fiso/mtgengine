"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Fork extends Card {
  constructor(game) {
    super(game, "Fork", "Collector's Edition", "CED");
  }
}

module.exports = Fork;
