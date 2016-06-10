"use strict";
const Constants = require ("../../../Constants");
const RelentlessSkaabsBase = require("../setDKA/RelentlessSkaabs");

class RelentlessSkaabs extends RelentlessSkaabsBase {
  constructor (game) {
    super(game, "Relentless Skaabs", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = RelentlessSkaabs;
