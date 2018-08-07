"use strict";
const Constants = require ("../../../Constants");
const ForbiddenAlchemyBase = require("../setMM3/ForbiddenAlchemy");

class ForbiddenAlchemy extends ForbiddenAlchemyBase {
  constructor (game) {
    super(game, "Forbidden Alchemy", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = ForbiddenAlchemy;
