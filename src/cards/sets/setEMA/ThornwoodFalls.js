"use strict";
const Constants = require ("../../../Constants");
const ThornwoodFallsBase = require("../setC15/ThornwoodFalls");

class ThornwoodFalls extends ThornwoodFallsBase {
  constructor (game) {
    super(game, "Thornwood Falls", "Eternal Masters", "EMA");
  }
}

module.exports = ThornwoodFalls;
