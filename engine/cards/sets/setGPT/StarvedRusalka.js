"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StarvedRusalka extends Card {
  constructor(game) {
    super(game, "Starved Rusalka", "Guildpact", "GPT");
  }
}

module.exports = StarvedRusalka;
