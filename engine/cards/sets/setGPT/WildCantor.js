"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WildCantor extends Card {
  constructor(game) {
    super(game, "Wild Cantor", "Guildpact", "GPT");
  }
}

module.exports = WildCantor;
