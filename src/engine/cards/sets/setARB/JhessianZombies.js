"use strict";
const Constants = require ("../../../Constants");
const JhessianZombiesBase = require("../setDDH/JhessianZombies");

class JhessianZombies extends JhessianZombiesBase {
  constructor (game) {
    super(game, "Jhessian Zombies", "Alara Reborn", "ARB");
  }
}

module.exports = JhessianZombies;
