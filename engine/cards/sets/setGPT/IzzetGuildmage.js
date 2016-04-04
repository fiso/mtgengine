"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IzzetGuildmageBase = require("../setDDJ/IzzetGuildmage.js");

class IzzetGuildmage extends IzzetGuildmageBase {
  constructor(game) {
    super(game, "Izzet Guildmage", "Guildpact", "GPT");
  }
}

module.exports = IzzetGuildmage;
