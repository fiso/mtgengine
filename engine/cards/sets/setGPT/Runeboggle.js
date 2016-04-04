"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Runeboggle extends Card {
  constructor(game) {
    super(game, "Runeboggle", "Guildpact", "GPT");
  }
}

module.exports = Runeboggle;
