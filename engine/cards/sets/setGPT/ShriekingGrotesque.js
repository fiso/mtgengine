"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShriekingGrotesque extends Card {
  constructor(game) {
    super(game, "Shrieking Grotesque", "Guildpact", "GPT");
  }
}

module.exports = ShriekingGrotesque;
