"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GolgariGuildmageBase = require("../setC13/GolgariGuildmage.js");

class GolgariGuildmage extends GolgariGuildmageBase {
  constructor(game) {
    super(game, "Golgari Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GolgariGuildmage;
