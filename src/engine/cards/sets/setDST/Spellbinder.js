"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellbinder extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellbinder", "Darksteel", "DST");
  }
}

module.exports = Spellbinder;
