"use strict";
const Constants = require ("../../../Constants");
const PrideofLionsBase = require("../setDDH/PrideofLions");

class PrideofLions extends PrideofLionsBase {
  constructor (game) {
    super(game, "Pride of Lions", "Seventh Edition", "7ED");
  }
}

module.exports = PrideofLions;
