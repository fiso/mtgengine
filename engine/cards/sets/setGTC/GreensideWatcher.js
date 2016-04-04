"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GreensideWatcher extends Card {
  constructor(game) {
    super(game, "Greenside Watcher", "Gatecrash", "GTC");
  }
}

module.exports = GreensideWatcher;
