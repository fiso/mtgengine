"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Quicken extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicken", "Guildpact", "GPT");
  }
}

module.exports = Quicken;
