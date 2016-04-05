"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DreamLeash extends UnimplementedCard {
  constructor(game) {
    super(game, "Dream Leash", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DreamLeash;
