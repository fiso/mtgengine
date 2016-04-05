"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleeperAgent extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleeper Agent", "Tenth Edition", "10E");
  }
}

module.exports = SleeperAgent;
