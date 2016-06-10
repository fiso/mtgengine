"use strict";
const Constants = require ("../../../Constants");
const PlummetBase = require("../setARC/Plummet");

class Plummet extends PlummetBase {
  constructor (game) {
    super(game, "Plummet", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = Plummet;
