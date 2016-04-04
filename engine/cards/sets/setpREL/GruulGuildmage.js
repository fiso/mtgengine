"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GruulGuildmageBase = require("../setGPT/GruulGuildmage.js");

class GruulGuildmage extends GruulGuildmageBase {
  constructor(game) {
    super(game, "Gruul Guildmage", "Release Events", "pREL");
  }
}

module.exports = GruulGuildmage;
