"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SelesnyaGuildmageBase = require("../setARC/SelesnyaGuildmage.js");

class SelesnyaGuildmage extends SelesnyaGuildmageBase {
  constructor(game) {
    super(game, "Selesnya Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = SelesnyaGuildmage;
