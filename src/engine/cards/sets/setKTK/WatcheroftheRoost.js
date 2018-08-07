"use strict";
const Constants = require ("../../../Constants");
const WatcheroftheRoostBase = require("../setUGIN/WatcheroftheRoost");

class WatcheroftheRoost extends WatcheroftheRoostBase {
  constructor (game) {
    super(game, "Watcher of the Roost", "Khans of Tarkir", "KTK");
  }
}

module.exports = WatcheroftheRoost;
