"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EyelessWatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Eyeless Watcher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EyelessWatcher;
