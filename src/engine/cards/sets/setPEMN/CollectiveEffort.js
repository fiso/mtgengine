"use strict";
const Constants = require ("../../../Constants");
const CollectiveEffortBase = require("../setEMN/CollectiveEffort");

class CollectiveEffort extends CollectiveEffortBase {
  constructor (game) {
    super(game, "Collective Effort", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = CollectiveEffort;
