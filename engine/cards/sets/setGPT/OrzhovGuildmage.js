"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrzhovGuildmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Orzhov Guildmage", "Guildpact", "GPT");
  }
}

module.exports = OrzhovGuildmage;
