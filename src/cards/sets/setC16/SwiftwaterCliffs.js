"use strict";
const Constants = require ("../../../Constants");
const SwiftwaterCliffsBase = require("../setC18/SwiftwaterCliffs");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor (game) {
    super(game, "Swiftwater Cliffs", "Commander 2016", "C16");
  }
}

module.exports = SwiftwaterCliffs;
