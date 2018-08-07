"use strict";
const Constants = require ("../../../Constants");
const CollectiveUnconsciousBase = require("../setCMA/CollectiveUnconscious");

class CollectiveUnconscious extends CollectiveUnconsciousBase {
  constructor (game) {
    super(game, "Collective Unconscious", "Commander 2014", "C14");
  }
}

module.exports = CollectiveUnconscious;
