"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGuildgateBase = require("../setC13/BorosGuildgate.js");

class BorosGuildgate extends BorosGuildgateBase {
  constructor(game) {
    super(game, "Boros Guildgate", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = BorosGuildgate;
