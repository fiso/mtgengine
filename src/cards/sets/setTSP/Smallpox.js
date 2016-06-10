"use strict";
const Constants = require ("../../../Constants");
const SmallpoxBase = require("../setM12/Smallpox");

class Smallpox extends SmallpoxBase {
  constructor (game) {
    super(game, "Smallpox", "Time Spiral", "TSP");
  }
}

module.exports = Smallpox;
