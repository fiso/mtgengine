"use strict";
const Constants = require ("../../../Constants");
const BoilingSeasBase = require("../set9ED/BoilingSeas");

class BoilingSeas extends BoilingSeasBase {
  constructor(game) {
    super(game, "Boiling Seas", "Portal", "POR");
  }
}

module.exports = BoilingSeas;
