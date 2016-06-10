"use strict";
const Constants = require ("../../../Constants");
const WatcheroftheRoostBase = require("../setKTK/WatcheroftheRoost");

class WatcheroftheRoost extends WatcheroftheRoostBase {
  constructor (game) {
    super(game, "Watcher of the Roost", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = WatcheroftheRoost;
