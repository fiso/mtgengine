"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Castigate extends UnimplementedCard {
  constructor (game) {
    super(game, "Castigate", "Guildpact", "GPT");
  }
}

module.exports = Castigate;
