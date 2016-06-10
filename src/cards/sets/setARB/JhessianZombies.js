"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JhessianZombies extends UnimplementedCard {
  constructor (game) {
    super(game, "Jhessian Zombies", "Alara Reborn", "ARB");
  }
}

module.exports = JhessianZombies;
