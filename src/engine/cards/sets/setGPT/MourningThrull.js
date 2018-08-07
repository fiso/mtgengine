"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MourningThrull extends UnimplementedCard {
  constructor (game) {
    super(game, "Mourning Thrull", "Guildpact", "GPT");
  }
}

module.exports = MourningThrull;
