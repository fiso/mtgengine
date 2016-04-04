"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PearledUnicorn extends Card {
  constructor(game) {
    super(game, "Pearled Unicorn", "Collector's Edition", "CED");
  }
}

module.exports = PearledUnicorn;
