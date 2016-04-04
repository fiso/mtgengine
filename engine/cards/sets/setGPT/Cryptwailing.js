"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cryptwailing extends UnimplementedCard {
  constructor(game) {
    super(game, "Cryptwailing", "Guildpact", "GPT");
  }
}

module.exports = Cryptwailing;
