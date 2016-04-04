"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RumblingSlum extends Card {
  constructor(game) {
    super(game, "Rumbling Slum", "Guildpact", "GPT");
  }
}

module.exports = RumblingSlum;
