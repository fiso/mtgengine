"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HealingGrace extends UnimplementedCard {
  constructor (game) {
    super(game, "Healing Grace", "Dominaria", "DOM");
  }
}

module.exports = HealingGrace;
