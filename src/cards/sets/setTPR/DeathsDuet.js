"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathsDuet extends UnimplementedCard {
  constructor (game) {
    super(game, "Death's Duet", "Tempest Remastered", "TPR");
  }
}

module.exports = DeathsDuet;
