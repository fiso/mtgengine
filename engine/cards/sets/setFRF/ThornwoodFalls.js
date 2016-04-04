"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornwoodFallsBase = require("../setC15/ThornwoodFalls.js");

class ThornwoodFalls extends ThornwoodFallsBase {
  constructor(game) {
    super(game, "Thornwood Falls", "Fate Reforged", "FRF");
  }
}

module.exports = ThornwoodFalls;
