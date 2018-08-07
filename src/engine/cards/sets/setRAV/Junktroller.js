"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Junktroller extends UnimplementedCard {
  constructor (game) {
    super(game, "Junktroller", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Junktroller;
