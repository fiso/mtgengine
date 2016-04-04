"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Cremate extends Card {
  constructor(game) {
    super(game, "Cremate", "Guildpact", "GPT");
  }
}

module.exports = Cremate;
