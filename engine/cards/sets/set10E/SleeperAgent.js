"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SleeperAgent extends Card {
  constructor(game) {
    super(game, "Sleeper Agent", "Tenth Edition", "10E");
  }
}

module.exports = SleeperAgent;
