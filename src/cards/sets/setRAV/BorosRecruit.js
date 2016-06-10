"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BorosRecruit extends UnimplementedCard {
  constructor (game) {
    super(game, "Boros Recruit", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = BorosRecruit;
