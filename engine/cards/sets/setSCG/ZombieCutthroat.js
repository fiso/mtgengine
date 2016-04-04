"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ZombieCutthroat extends Card {
  constructor(game) {
    super(game, "Zombie Cutthroat", "Scourge", "SCG");
  }
}

module.exports = ZombieCutthroat;
