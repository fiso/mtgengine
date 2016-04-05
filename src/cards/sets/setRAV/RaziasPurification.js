"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RaziasPurification extends UnimplementedCard {
  constructor(game) {
    super(game, "Razia's Purification", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RaziasPurification;
