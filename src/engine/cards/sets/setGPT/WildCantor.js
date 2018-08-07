"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildCantor extends UnimplementedCard {
  constructor (game) {
    super(game, "Wild Cantor", "Guildpact", "GPT");
  }
}

module.exports = WildCantor;
