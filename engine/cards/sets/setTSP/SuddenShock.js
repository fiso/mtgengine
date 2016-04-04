"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SuddenShockBase = require("../setMMA/SuddenShock.js");

class SuddenShock extends SuddenShockBase {
  constructor(game) {
    super(game, "Sudden Shock", "Time Spiral", "TSP");
  }
}

module.exports = SuddenShock;
