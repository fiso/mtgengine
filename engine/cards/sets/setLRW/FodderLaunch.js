"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FodderLaunch extends Card {
  constructor(game) {
    super(game, "Fodder Launch", "Lorwyn", "LRW");
  }
}

module.exports = FodderLaunch;
