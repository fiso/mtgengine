"use strict";
const Constants = require ("../../../Constants");
const GolgariGuildmageBase = require("../setC13/GolgariGuildmage");

class GolgariGuildmage extends GolgariGuildmageBase {
  constructor(game) {
    super(game, "Golgari Guildmage", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = GolgariGuildmage;
