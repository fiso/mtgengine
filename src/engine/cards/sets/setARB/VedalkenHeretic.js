"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenHeretic extends UnimplementedCard {
  constructor (game) {
    super(game, "Vedalken Heretic", "Alara Reborn", "ARB");
  }
}

module.exports = VedalkenHeretic;
