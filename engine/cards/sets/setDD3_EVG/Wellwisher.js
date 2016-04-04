"use strict";
const Constants = require ("../../../Constants");
const WellwisherBase = require("../setC14/Wellwisher");

class Wellwisher extends WellwisherBase {
  constructor(game) {
    super(game, "Wellwisher", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Wellwisher;
