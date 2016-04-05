"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GladeWatcher extends UnimplementedCard {
  constructor(game) {
    super(game, "Glade Watcher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GladeWatcher;
