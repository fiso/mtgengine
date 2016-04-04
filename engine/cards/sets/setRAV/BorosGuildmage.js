"use strict";
const Constants = require ("../../../Constants");
const BorosGuildmageBase = require("../setCMD/BorosGuildmage");

class BorosGuildmage extends BorosGuildmageBase {
  constructor(game) {
    super(game, "Boros Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosGuildmage;
