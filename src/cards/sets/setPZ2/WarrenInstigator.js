"use strict";
const Constants = require ("../../../Constants");
const WarrenInstigatorBase = require("../setDDT/WarrenInstigator");

class WarrenInstigator extends WarrenInstigatorBase {
  constructor (game) {
    super(game, "Warren Instigator", "You Make the Cube", "PZ2");
  }
}

module.exports = WarrenInstigator;
