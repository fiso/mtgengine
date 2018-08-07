"use strict";
const Constants = require ("../../../Constants");
const WatcheroftheRoostBase = require("../setUGIN/WatcheroftheRoost");

class WatcheroftheRoost extends WatcheroftheRoostBase {
  constructor (game) {
    super(game, "Watcher of the Roost", "Magic Online Promos", "PRM");
  }
}

module.exports = WatcheroftheRoost;
