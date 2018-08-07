"use strict";
const Constants = require ("../../../Constants");
const EliminatetheCompetitionBase = require("../setKLD/EliminatetheCompetition");

class EliminatetheCompetition extends EliminatetheCompetitionBase {
  constructor (game) {
    super(game, "Eliminate the Competition", "Kaladesh Promos", "PKLD");
  }
}

module.exports = EliminatetheCompetition;
