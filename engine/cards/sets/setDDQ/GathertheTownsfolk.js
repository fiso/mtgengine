"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GathertheTownsfolkBase = require("../setDKA/GathertheTownsfolk.js");

class GathertheTownsfolk extends GathertheTownsfolkBase {
  constructor(game) {
    super(game, "Gather the Townsfolk", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = GathertheTownsfolk;
