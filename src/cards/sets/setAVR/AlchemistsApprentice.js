"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AlchemistsApprentice extends UnimplementedCard {
  constructor (game) {
    super(game, "Alchemist's Apprentice", "Avacyn Restored", "AVR");
  }
}

module.exports = AlchemistsApprentice;
