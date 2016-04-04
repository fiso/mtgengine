"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlackVise extends Card {
  constructor(game) {
    super(game, "Black Vise", "Collector's Edition", "CED");
  }
}

module.exports = BlackVise;
