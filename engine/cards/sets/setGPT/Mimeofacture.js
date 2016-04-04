"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mimeofacture extends Card {
  constructor(game) {
    super(game, "Mimeofacture", "Guildpact", "GPT");
  }
}

module.exports = Mimeofacture;
