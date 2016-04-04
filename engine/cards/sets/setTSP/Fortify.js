"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FortifyBase = require("../setM14/Fortify.js");

class Fortify extends FortifyBase {
  constructor(game) {
    super(game, "Fortify", "Time Spiral", "TSP");
  }
}

module.exports = Fortify;
