"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpellSwindle extends UnimplementedCard {
  constructor (game) {
    super(game, "Spell Swindle", "Ixalan", "XLN");
  }
}

module.exports = SpellSwindle;
