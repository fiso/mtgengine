"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BattlefieldThaumaturge extends Card {
  constructor(game) {
    super(game, "Battlefield Thaumaturge", "Journey into Nyx", "JOU");
  }
}

module.exports = BattlefieldThaumaturge;
