"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SimicGuildmage extends UnimplementedCard {
  constructor(game) {
    super(game, "Simic Guildmage", "Dissension", "DIS");
  }
}

module.exports = SimicGuildmage;
