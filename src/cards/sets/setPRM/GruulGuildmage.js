"use strict";
const Constants = require ("../../../Constants");
const GruulGuildmageBase = require("../setGPT/GruulGuildmage");

class GruulGuildmage extends GruulGuildmageBase {
  constructor (game) {
    super(game, "Gruul Guildmage", "Magic Online Promos", "PRM");
  }
}

module.exports = GruulGuildmage;
