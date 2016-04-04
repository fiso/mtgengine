"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GreensideWatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Greenside Watcher", "Gatecrash", "GTC");
  }
}

module.exports = GreensideWatcher;
