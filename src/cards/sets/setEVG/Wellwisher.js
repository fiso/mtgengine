"use strict";
const Constants = require ("../../../Constants");
const WellwisherBase = require("../setCMA/Wellwisher");

class Wellwisher extends WellwisherBase {
  constructor (game) {
    super(game, "Wellwisher", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = Wellwisher;
