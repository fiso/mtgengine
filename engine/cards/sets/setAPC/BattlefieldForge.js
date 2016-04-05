"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldForge extends UnimplementedCard {
  constructor(game) {
    super(game, "Battlefield Forge", "Apocalypse", "APC");
  }
}

module.exports = BattlefieldForge;
