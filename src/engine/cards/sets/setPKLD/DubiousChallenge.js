"use strict";
const Constants = require ("../../../Constants");
const DubiousChallengeBase = require("../setKLD/DubiousChallenge");

class DubiousChallenge extends DubiousChallengeBase {
  constructor (game) {
    super(game, "Dubious Challenge", "Kaladesh Promos", "PKLD");
  }
}

module.exports = DubiousChallenge;
