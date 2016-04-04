"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BorosGuildmageBase = require("../setCMD/BorosGuildmage.js");

class BorosGuildmage extends BorosGuildmageBase {
  constructor(game) {
    super(game, "Boros Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosGuildmage;
