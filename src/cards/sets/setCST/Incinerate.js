"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Incinerate extends UnimplementedCard {
  constructor (game) {
    super(game, "Incinerate", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Incinerate;
