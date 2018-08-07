"use strict";
const Constants = require ("../../../Constants");
const BorosGuildmageBase = require("../setCMA/BorosGuildmage");

class BorosGuildmage extends BorosGuildmageBase {
  constructor (game) {
    super(game, "Boros Guildmage", "Planechase", "HOP");
  }
}

module.exports = BorosGuildmage;
