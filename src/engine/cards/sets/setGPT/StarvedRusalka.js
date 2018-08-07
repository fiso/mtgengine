"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StarvedRusalka extends UnimplementedCard {
  constructor (game) {
    super(game, "Starved Rusalka", "Guildpact", "GPT");
  }
}

module.exports = StarvedRusalka;
