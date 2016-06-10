"use strict";
const Constants = require ("../../../Constants");
const FloodBase = require("../setBRB/Flood");

class Flood extends FloodBase {
  constructor (game) {
    super(game, "Flood", "Fifth Edition", "5ED");
  }
}

module.exports = Flood;
