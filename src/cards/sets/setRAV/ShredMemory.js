"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShredMemory extends UnimplementedCard {
  constructor(game) {
    super(game, "Shred Memory", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ShredMemory;
