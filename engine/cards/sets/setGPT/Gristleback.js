"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Gristleback extends Card {
  constructor(game) {
    super(game, "Gristleback", "Guildpact", "GPT");
  }
}

module.exports = Gristleback;
