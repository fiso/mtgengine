"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setBBD/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor (game) {
    super(game, "Beast Within", "Planechase 2012", "PC2");
  }
}

module.exports = BeastWithin;
