"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Borborygmos extends Card {
  constructor(game) {
    super(game, "Borborygmos", "Guildpact", "GPT");
  }
}

module.exports = Borborygmos;
