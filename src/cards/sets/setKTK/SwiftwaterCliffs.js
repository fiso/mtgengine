"use strict";
const Constants = require ("../../../Constants");
const SwiftwaterCliffsBase = require("../setC15/SwiftwaterCliffs");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor (game) {
    super(game, "Swiftwater Cliffs", "Khans of Tarkir", "KTK");
  }
}

module.exports = SwiftwaterCliffs;
