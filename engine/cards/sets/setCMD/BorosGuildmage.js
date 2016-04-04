"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BorosGuildmage extends Card {
  constructor(game) {
    super(game, "Boros Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = BorosGuildmage;
