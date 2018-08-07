"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bioplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Bioplasm", "Guildpact", "GPT");
  }
}

module.exports = Bioplasm;
