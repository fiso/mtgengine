"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MoonlightBargain extends UnimplementedCard {
  constructor(game) {
    super(game, "Moonlight Bargain", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = MoonlightBargain;
