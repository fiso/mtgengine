"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JhessianZombies extends Card {
  constructor(game) {
    super(game, "Jhessian Zombies", "Alara Reborn", "ARB");
  }
}

module.exports = JhessianZombies;
