"use strict";
const Constants = require ("../../../Constants");
const ThreadsofDisloyaltyBase = require("../setSS1/ThreadsofDisloyalty");

class ThreadsofDisloyalty extends ThreadsofDisloyaltyBase {
  constructor (game) {
    super(game, "Threads of Disloyalty", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = ThreadsofDisloyalty;
