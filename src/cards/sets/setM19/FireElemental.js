"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FireElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Fire Elemental", "Core Set 2019", "M19");
  }
}

module.exports = FireElemental;
