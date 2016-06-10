"use strict";
const Constants = require ("../../../Constants");
const DarkConfidantBase = require("../setpJGP/DarkConfidant");

class DarkConfidant extends DarkConfidantBase {
  constructor (game) {
    super(game, "Dark Confidant", "Modern Masters", "MMA");
  }
}

module.exports = DarkConfidant;
