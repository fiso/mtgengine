"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WatcherintheWeb extends Card {
  constructor(game) {
    super(game, "Watcher in the Web", "Shadows over Innistrad", "SOI");
  }
}

module.exports = WatcherintheWeb;
