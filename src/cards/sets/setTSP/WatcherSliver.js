"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatcherSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Watcher Sliver", "Time Spiral", "TSP");
  }
}

module.exports = WatcherSliver;
