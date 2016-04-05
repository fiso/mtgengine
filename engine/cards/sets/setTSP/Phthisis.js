"use strict";
const Constants = require ("../../../Constants");
const PhthisisBase = require("../setC13/Phthisis");

class Phthisis extends PhthisisBase {
  constructor(game) {
    super(game, "Phthisis", "Time Spiral", "TSP");
  }
}

module.exports = Phthisis;
