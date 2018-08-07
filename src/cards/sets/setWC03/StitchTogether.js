"use strict";
const Constants = require ("../../../Constants");
const StitchTogetherBase = require("../setC18/StitchTogether");

class StitchTogether extends StitchTogetherBase {
  constructor (game) {
    super(game, "Stitch Together", "World Championship Decks 2003", "WC03");
  }
}

module.exports = StitchTogether;
