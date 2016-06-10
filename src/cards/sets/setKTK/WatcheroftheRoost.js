"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WatcheroftheRoost extends UnimplementedCard {
  constructor (game) {
    super(game, "Watcher of the Roost", "Khans of Tarkir", "KTK");
  }
}

module.exports = WatcheroftheRoost;
