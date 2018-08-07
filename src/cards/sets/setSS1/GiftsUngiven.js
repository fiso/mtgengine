"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GiftsUngiven extends UnimplementedCard {
  constructor (game) {
    super(game, "Gifts Ungiven", "Signature Spellbook: Jace", "SS1");
  }
}

module.exports = GiftsUngiven;
