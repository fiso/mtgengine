"use strict";
const Constants = require ("../../../Constants");
const SoulScarMageBase = require("../setAKH/SoulScarMage");

class SoulScarMage extends SoulScarMageBase {
  constructor (game) {
    super(game, "Soul-Scar Mage", "Amonkhet Promos", "PAKH");
  }
}

module.exports = SoulScarMage;
