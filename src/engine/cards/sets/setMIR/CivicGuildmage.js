"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CivicGuildmage extends UnimplementedCard {
  constructor (game) {
    super(game, "Civic Guildmage", "Mirage", "MIR");
  }
}

module.exports = CivicGuildmage;
