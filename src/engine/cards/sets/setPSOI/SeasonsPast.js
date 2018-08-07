"use strict";
const Constants = require ("../../../Constants");
const SeasonsPastBase = require("../setSOI/SeasonsPast");

class SeasonsPast extends SeasonsPastBase {
  constructor (game) {
    super(game, "Seasons Past", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = SeasonsPast;
