"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RakdosGuildmageBase = require("../setARC/RakdosGuildmage.js");

class RakdosGuildmage extends RakdosGuildmageBase {
  constructor(game) {
    super(game, "Rakdos Guildmage", "Champs and States", "pCMP");
  }
}

module.exports = RakdosGuildmage;
