"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaGuildmageBase = require("../setARC/SelesnyaGuildmage.js");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor(game) {
    super(game, "Selesnya Guildmage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaGuildmage;
