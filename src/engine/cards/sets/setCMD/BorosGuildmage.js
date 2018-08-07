"use strict";
const Constants = require ("../../../Constants");
const BorosGuildmageBase = require("../setCMA/BorosGuildmage");

class BorosGuildmage extends BorosGuildmageBase {
  constructor (game) {
    super(game, "Boros Guildmage", "Commander 2011", "CMD");
  }
}

module.exports = BorosGuildmage;
