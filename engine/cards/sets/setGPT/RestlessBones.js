"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RestlessBones extends Card {
  constructor(game) {
    super(game, "Restless Bones", "Guildpact", "GPT");
  }
}

module.exports = RestlessBones;
