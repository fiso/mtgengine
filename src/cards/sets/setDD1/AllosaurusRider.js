"use strict";
const Constants = require ("../../../Constants");
const AllosaurusRiderBase = require("../setEVG/AllosaurusRider");

class AllosaurusRider extends AllosaurusRiderBase {
  constructor (game) {
    super(game, "Allosaurus Rider", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = AllosaurusRider;
