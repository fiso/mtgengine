"use strict";
const Constants = require ("../../../Constants");
const CollectiveBrutalityBase = require("../setEMN/CollectiveBrutality");

class CollectiveBrutality extends CollectiveBrutalityBase {
  constructor (game) {
    super(game, "Collective Brutality", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = CollectiveBrutality;
