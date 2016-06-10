"use strict";
const Constants = require ("../../../Constants");
const GruulGuildmageBase = require("../setGPT/GruulGuildmage");

class GruulGuildmage extends GruulGuildmageBase {
  constructor (game) {
    super(game, "Gruul Guildmage", "Release Events", "pREL");
  }
}

module.exports = GruulGuildmage;
