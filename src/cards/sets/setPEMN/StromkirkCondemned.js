"use strict";
const Constants = require ("../../../Constants");
const StromkirkCondemnedBase = require("../setEMN/StromkirkCondemned");

class StromkirkCondemned extends StromkirkCondemnedBase {
  constructor (game) {
    super(game, "Stromkirk Condemned", "Eldritch Moon Promos", "PEMN");
  }
}

module.exports = StromkirkCondemned;
