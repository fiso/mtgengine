"use strict";
const Constants = require ("../../../Constants");
const CollectiveUnconsciousBase = require("../setCMA/CollectiveUnconscious");

class CollectiveUnconscious extends CollectiveUnconsciousBase {
  constructor (game) {
    super(game, "Collective Unconscious", "Eighth Edition", "8ED");
  }
}

module.exports = CollectiveUnconscious;
