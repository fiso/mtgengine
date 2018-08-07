"use strict";
const Constants = require ("../../../Constants");
const PearledUnicornBase = require("../set5ED/PearledUnicorn");

class PearledUnicorn extends PearledUnicornBase {
  constructor (game) {
    super(game, "Pearled Unicorn", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = PearledUnicorn;
