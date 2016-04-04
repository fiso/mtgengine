"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WatcheroftheRoostBase = require("../setKTK/WatcheroftheRoost.js");

class WatcheroftheRoost extends WatcheroftheRoostBase {
  constructor(game) {
    super(game, "Watcher of the Roost", "Ugin's Fate promos", "FRF_UGIN");
  }
}

module.exports = WatcheroftheRoost;
