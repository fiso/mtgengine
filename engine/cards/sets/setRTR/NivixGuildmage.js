"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const NivixGuildmageBase = require("../setC13/NivixGuildmage.js");

class NivixGuildmage extends NivixGuildmageBase {
  constructor(game) {
    super(game, "Nivix Guildmage", "Return to Ravnica", "RTR");
  }
}

module.exports = NivixGuildmage;
