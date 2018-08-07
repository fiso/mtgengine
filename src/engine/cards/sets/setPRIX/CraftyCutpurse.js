"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CraftyCutpurse extends UnimplementedCard {
  constructor (game) {
    super(game, "Crafty Cutpurse", "Rivals of Ixalan Promos", "PRIX");
  }
}

module.exports = CraftyCutpurse;
