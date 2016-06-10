"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SelesnyaSagittars extends UnimplementedCard {
  constructor (game) {
    super(game, "Selesnya Sagittars", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = SelesnyaSagittars;
