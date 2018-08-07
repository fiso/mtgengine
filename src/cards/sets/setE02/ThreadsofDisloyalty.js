"use strict";
const Constants = require ("../../../Constants");
const ThreadsofDisloyaltyBase = require("../setSS1/ThreadsofDisloyalty");

class ThreadsofDisloyalty extends ThreadsofDisloyaltyBase {
  constructor (game) {
    super(game, "Threads of Disloyalty", "Explorers of Ixalan", "E02");
  }
}

module.exports = ThreadsofDisloyalty;
