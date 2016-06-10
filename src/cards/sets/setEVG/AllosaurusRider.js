"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setCSP/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = AllosaurusRider;
