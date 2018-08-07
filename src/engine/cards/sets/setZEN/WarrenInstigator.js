"use strict";
const Constants = require ("../../../Constants");
const WarrenInstigatorBase = require("../setDDT/WarrenInstigator");

class WarrenInstigator extends WarrenInstigatorBase {
  constructor (game) {
    super(game, "Warren Instigator", "Zendikar", "ZEN");
  }
}

module.exports = WarrenInstigator;
