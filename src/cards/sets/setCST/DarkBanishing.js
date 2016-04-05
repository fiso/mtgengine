"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkBanishing extends UnimplementedCard {
  constructor(game) {
    super(game, "Dark Banishing", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = DarkBanishing;
