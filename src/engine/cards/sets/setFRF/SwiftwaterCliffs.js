"use strict";
const Constants = require ("../../../Constants");
const SwiftwaterCliffsBase = require("../setC18/SwiftwaterCliffs");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor (game) {
    super(game, "Swiftwater Cliffs", "Fate Reforged", "FRF");
  }
}

module.exports = SwiftwaterCliffs;
