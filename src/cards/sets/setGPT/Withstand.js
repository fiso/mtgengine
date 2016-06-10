"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Withstand extends UnimplementedCard {
  constructor (game) {
    super(game, "Withstand", "Guildpact", "GPT");
  }
}

module.exports = Withstand;
