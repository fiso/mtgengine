"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Frazzle extends Card {
  constructor(game) {
    super(game, "Frazzle", "Guildpact", "GPT");
  }
}

module.exports = Frazzle;
