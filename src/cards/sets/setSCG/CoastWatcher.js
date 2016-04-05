"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastWatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Coast Watcher", "Scourge", "SCG");
  }
}

module.exports = CoastWatcher;
