"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinBrawler extends Card {
  constructor(game) {
    super(game, "Goblin Brawler", "Fifth Dawn", "5DN");
  }
}

module.exports = GoblinBrawler;
