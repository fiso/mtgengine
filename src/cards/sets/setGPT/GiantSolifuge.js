"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiantSolifuge extends UnimplementedCard {
  constructor (game) {
    super(game, "Giant Solifuge", "Guildpact", "GPT");
  }
}

module.exports = GiantSolifuge;
