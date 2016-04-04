"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GladeWatcher extends Card {
  constructor(game) {
    super(game, "Glade Watcher", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GladeWatcher;
