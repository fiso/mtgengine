"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setCSP/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = AllosaurusRider;
