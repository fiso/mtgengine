"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SimicGuildmage extends Card {
  constructor(game) {
    super(game, "Simic Guildmage", "Dissension", "DIS");
  }
}

module.exports = SimicGuildmage;
