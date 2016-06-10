"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NullstoneGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Nullstone Gargoyle", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = NullstoneGargoyle;
