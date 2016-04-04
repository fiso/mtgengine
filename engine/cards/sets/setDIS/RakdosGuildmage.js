"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosGuildmageBase = require("../setARC/RakdosGuildmage.js");

class RakdosGuildmage extends RakdosGuildmageBase {
  constructor(game) {
    super(game, "Rakdos Guildmage", "Dissension", "DIS");
  }
}

module.exports = RakdosGuildmage;
