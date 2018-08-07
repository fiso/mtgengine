"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BattlefieldThaumaturge extends UnimplementedCard {
  constructor (game) {
    super(game, "Battlefield Thaumaturge", "Journey into Nyx", "JOU");
  }
}

module.exports = BattlefieldThaumaturge;
