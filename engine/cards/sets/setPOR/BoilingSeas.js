"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BoilingSeasBase = require("../set9ED/BoilingSeas.js");

class BoilingSeas extends BoilingSeasBase {
  constructor(game) {
    super(game, "Boiling Seas", "Portal", "POR");
  }
}

module.exports = BoilingSeas;
