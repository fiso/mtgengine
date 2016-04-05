"use strict";
const Constants = require ("../../../Constants");
const IchorSlickBase = require("../setDD3_GVL/IchorSlick");

class IchorSlick extends IchorSlickBase {
  constructor(game) {
    super(game, "Ichor Slick", "Duel Decks: Garruk vs. Liliana", "DDD");
  }
}

module.exports = IchorSlick;
