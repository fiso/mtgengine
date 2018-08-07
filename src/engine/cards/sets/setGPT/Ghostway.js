"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghostway extends UnimplementedCard {
  constructor (game) {
    super(game, "Ghostway", "Guildpact", "GPT");
  }
}

module.exports = Ghostway;
