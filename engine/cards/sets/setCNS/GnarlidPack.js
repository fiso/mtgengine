"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GnarlidPack extends Card {
  constructor(game) {
    super(game, "Gnarlid Pack", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = GnarlidPack;
