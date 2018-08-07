"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatcheroftheRoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Watcher of the Roost", "Ugin's Fate", "UGIN");
  }
}

module.exports = WatcheroftheRoost;
