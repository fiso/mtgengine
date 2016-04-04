"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ToriiWatchward extends Card {
  constructor(game) {
    super(game, "Torii Watchward", "Saviors of Kamigawa", "SOK");
  }
}

module.exports = ToriiWatchward;
