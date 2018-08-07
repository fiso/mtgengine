"use strict";
const Constants = require ("../../../Constants");
const CunningWishBase = require("../setG07/CunningWish");

class CunningWish extends CunningWishBase {
  constructor (game) {
    super(game, "Cunning Wish", "World Championship Decks 2002", "WC02");
  }
}

module.exports = CunningWish;
