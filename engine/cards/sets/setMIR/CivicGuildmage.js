"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CivicGuildmage extends Card {
  constructor(game) {
    super(game, "Civic Guildmage", "Mirage", "MIR");
  }
}

module.exports = CivicGuildmage;
