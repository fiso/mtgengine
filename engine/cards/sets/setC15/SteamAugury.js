"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SteamAugury extends Card {
  constructor(game) {
    super(game, "Steam Augury", "Commander 2015", "C15");
  }
}

module.exports = SteamAugury;
