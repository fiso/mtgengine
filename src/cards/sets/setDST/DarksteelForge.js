"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelForge extends UnimplementedCard {
  constructor(game) {
    super(game, "Darksteel Forge", "Darksteel", "DST");
  }
}

module.exports = DarksteelForge;
