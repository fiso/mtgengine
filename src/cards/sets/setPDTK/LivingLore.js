"use strict";
const Constants = require ("../../../Constants");
const LivingLoreBase = require("../setDTK/LivingLore");

class LivingLore extends LivingLoreBase {
  constructor (game) {
    super(game, "Living Lore", "Dragons of Tarkir Promos", "PDTK");
  }
}

module.exports = LivingLore;
