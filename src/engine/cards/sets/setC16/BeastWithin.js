"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setBBD/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor (game) {
    super(game, "Beast Within", "Commander 2016", "C16");
  }
}

module.exports = BeastWithin;
