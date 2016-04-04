"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AchHansRun extends Card {
  constructor(game) {
    super(game, ""Ach! Hans, Run!"", "Unhinged", "UNH");
  }
}

module.exports = AchHansRun;
