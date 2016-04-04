"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StasisCell extends Card {
  constructor(game) {
    super(game, "Stasis Cell", "Magic: The Gathering—Conspiracy", "CNS");
  }
}

module.exports = StasisCell;
