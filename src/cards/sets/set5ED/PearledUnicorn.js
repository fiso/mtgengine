"use strict";
const Constants = require ("../../../Constants");
const PearledUnicornBase = require("../setCED/PearledUnicorn");

class PearledUnicorn extends PearledUnicornBase {
  constructor (game) {
    super(game, "Pearled Unicorn", "Fifth Edition", "5ED");
  }
}

module.exports = PearledUnicorn;
