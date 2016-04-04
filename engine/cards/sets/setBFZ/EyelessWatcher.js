"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EyelessWatcher extends Card {
  constructor(game) {
    super(game, "Eyeless Watcher", "Battle for Zendikar", "BFZ");
  }
}

module.exports = EyelessWatcher;
