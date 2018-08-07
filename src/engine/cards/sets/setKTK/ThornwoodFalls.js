"use strict";
const Constants = require ("../../../Constants");
const ThornwoodFallsBase = require("../setC18/ThornwoodFalls");

class ThornwoodFalls extends ThornwoodFallsBase {
  constructor (game) {
    super(game, "Thornwood Falls", "Khans of Tarkir", "KTK");
  }
}

module.exports = ThornwoodFalls;
