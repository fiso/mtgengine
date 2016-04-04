"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PearledUnicornBase = require("../setCED/PearledUnicorn.js");

class PearledUnicorn extends PearledUnicornBase {
  constructor(game) {
    super(game, "Pearled Unicorn", "Unlimited Edition", "2ED");
  }
}

module.exports = PearledUnicorn;
