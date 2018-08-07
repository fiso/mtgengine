"use strict";
const Constants = require ("../../../Constants");
const EnduringScalelordBase = require("../setCM2/EnduringScalelord");

class EnduringScalelord extends EnduringScalelordBase {
  constructor (game) {
    super(game, "Enduring Scalelord", "Dragons of Tarkir", "DTK");
  }
}

module.exports = EnduringScalelord;
