"use strict";
const Constants = require ("../../../Constants");
const RakdosGuildmageBase = require("../setARC/RakdosGuildmage");

class RakdosGuildmage extends RakdosGuildmageBase {
  constructor (game) {
    super(game, "Rakdos Guildmage", "Magic Online Promos", "PRM");
  }
}

module.exports = RakdosGuildmage;
