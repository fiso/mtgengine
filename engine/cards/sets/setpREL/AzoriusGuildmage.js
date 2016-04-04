"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AzoriusGuildmageBase = require("../setDIS/AzoriusGuildmage.js");

class AzoriusGuildmage extends AzoriusGuildmageBase {
  constructor(game) {
    super(game, "Azorius Guildmage", "Release Events", "pREL");
  }
}

module.exports = AzoriusGuildmage;
