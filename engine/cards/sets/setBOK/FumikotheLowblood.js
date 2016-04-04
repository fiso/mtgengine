"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FumikotheLowblood extends Card {
  constructor(game) {
    super(game, "Fumiko the Lowblood", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = FumikotheLowblood;
