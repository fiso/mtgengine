"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonAppeasement extends UnimplementedCard {
  constructor (game) {
    super(game, "Dragon Appeasement", "Alara Reborn", "ARB");
  }
}

module.exports = DragonAppeasement;
