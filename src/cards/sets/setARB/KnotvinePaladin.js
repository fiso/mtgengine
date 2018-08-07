"use strict";
const Constants = require ("../../../Constants");
const KnotvinePaladinBase = require("../setDDG/KnotvinePaladin");

class KnotvinePaladin extends KnotvinePaladinBase {
  constructor (game) {
    super(game, "Knotvine Paladin", "Alara Reborn", "ARB");
  }
}

module.exports = KnotvinePaladin;
