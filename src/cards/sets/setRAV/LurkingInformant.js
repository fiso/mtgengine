"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LurkingInformant extends UnimplementedCard {
  constructor (game) {
    super(game, "Lurking Informant", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = LurkingInformant;
