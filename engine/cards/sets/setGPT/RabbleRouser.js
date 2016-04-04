"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RabbleRouser extends Card {
  constructor(game) {
    super(game, "Rabble-Rouser", "Guildpact", "GPT");
  }
}

module.exports = RabbleRouser;
