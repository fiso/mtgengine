"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KillDestroy extends Card {
  constructor(game) {
    super(game, "Kill! Destroy!", "Unhinged", "UNH");
  }
}

module.exports = KillDestroy;
