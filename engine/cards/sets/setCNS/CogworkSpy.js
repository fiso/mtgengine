"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CogworkSpy extends Card {
  constructor(game) {
    super(game, "Cogwork Spy", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = CogworkSpy;
