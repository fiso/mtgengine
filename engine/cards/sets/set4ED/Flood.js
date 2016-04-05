"use strict";
const Constants = require ("../../../Constants");
const FloodBase = require("../setBRB/Flood");

class Flood extends FloodBase {
  constructor(game) {
    super(game, "Flood", "Fourth Edition", "4ED");
  }
}

module.exports = Flood;
