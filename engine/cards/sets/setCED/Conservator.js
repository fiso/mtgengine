"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Conservator extends Card {
  constructor(game) {
    super(game, "Conservator", "Collector's Edition", "CED");
  }
}

module.exports = Conservator;
