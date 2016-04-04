"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OrzhovGuildmageBase = require("../setGPT/OrzhovGuildmage.js");

class OrzhovGuildmage extends OrzhovGuildmageBase {
  constructor(game) {
    super(game, "Orzhov Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = OrzhovGuildmage;
