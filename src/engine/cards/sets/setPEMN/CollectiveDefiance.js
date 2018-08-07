"use strict";
const Constants = require ("../../../Constants");
const CollectiveDefianceBase = require("../setEMN/CollectiveDefiance");

class CollectiveDefiance extends CollectiveDefianceBase {
  constructor (game) {
    super(game, "Collective Defiance", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = CollectiveDefiance;
