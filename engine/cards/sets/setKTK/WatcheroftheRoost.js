"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WatcheroftheRoost extends Card {
  constructor(game) {
    super(game, "Watcher of the Roost", "Khans of Tarkir", "KTK");
  }
}

module.exports = WatcheroftheRoost;
