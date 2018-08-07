"use strict";
const Constants = require ("../../../Constants");
const SwiftwaterCliffsBase = require("../setC18/SwiftwaterCliffs");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor (game) {
    super(game, "Swiftwater Cliffs", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = SwiftwaterCliffs;
