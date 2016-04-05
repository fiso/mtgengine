"use strict";
const Constants = require ("../../../Constants");
const BeastWithinBase = require("../setDDL/BeastWithin");

class BeastWithin extends BeastWithinBase {
  constructor(game) {
    super(game, "Beast Within", "New Phyrexia", "NPH");
  }
}

module.exports = BeastWithin;
