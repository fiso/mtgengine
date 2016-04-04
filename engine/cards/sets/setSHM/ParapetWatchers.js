"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ParapetWatchers extends Card {
  constructor(game) {
    super(game, "Parapet Watchers", "Shadowmoor", "SHM");
  }
}

module.exports = ParapetWatchers;
