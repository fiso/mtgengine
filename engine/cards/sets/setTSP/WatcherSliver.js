"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WatcherSliver extends Card {
  constructor(game) {
    super(game, "Watcher Sliver", "Time Spiral", "TSP");
  }
}

module.exports = WatcherSliver;
