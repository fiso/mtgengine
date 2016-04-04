"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const RelentlessSkaabsBase = require("../setDKA/RelentlessSkaabs.js");

class RelentlessSkaabs extends RelentlessSkaabsBase {
  constructor(game) {
    super(game, "Relentless Skaabs", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = RelentlessSkaabs;
