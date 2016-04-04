"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ShaperGuildmage extends Card {
  constructor(game) {
    super(game, "Shaper Guildmage", "Mirage", "MIR");
  }
}

module.exports = ShaperGuildmage;
