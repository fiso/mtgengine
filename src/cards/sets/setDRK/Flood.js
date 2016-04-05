"use strict";
const Constants = require ("../../../Constants");
const FloodBase = require("../setBRB/Flood");

class Flood extends FloodBase {
  constructor(game) {
    super(game, "Flood", "The Dark", "DRK");
  }
}

module.exports = Flood;
