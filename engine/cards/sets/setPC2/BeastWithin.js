"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setDDL/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor(game) {
    super(game, "Beast Within", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = BeastWithin;
