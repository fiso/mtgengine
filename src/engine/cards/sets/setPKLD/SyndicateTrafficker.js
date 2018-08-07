"use strict";
const Constants = require ("../../../Constants");
const SyndicateTraffickerBase = require("../setKLD/SyndicateTrafficker");

class SyndicateTrafficker extends SyndicateTraffickerBase {
  constructor (game) {
    super(game, "Syndicate Trafficker", "Kaladesh Promos", "PKLD");
  }
}

module.exports = SyndicateTrafficker;
