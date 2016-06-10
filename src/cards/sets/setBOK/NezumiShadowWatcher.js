"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NezumiShadowWatcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Nezumi Shadow-Watcher", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = NezumiShadowWatcher;
