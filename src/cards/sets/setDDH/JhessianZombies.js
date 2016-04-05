"use strict";
const Constants = require ("../../../Constants");
const JhessianZombiesBase = require("../setARB/JhessianZombies");

class JhessianZombies extends JhessianZombiesBase {
  constructor(game) {
    super(game, "Jhessian Zombies", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JhessianZombies;
