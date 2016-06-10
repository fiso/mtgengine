"use strict";
const Constants = require ("../../../Constants");
const RakdosGuildmageBase = require("../setARC/RakdosGuildmage");

class RakdosGuildmage extends RakdosGuildmageBase {
  constructor (game) {
    super(game, "Rakdos Guildmage", "Dissension", "DIS");
  }
}

module.exports = RakdosGuildmage;
