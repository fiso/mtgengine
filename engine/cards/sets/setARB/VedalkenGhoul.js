"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VedalkenGhoul extends UnimplementedCard {
  constructor(game) {
    super(game, "Vedalken Ghoul", "Alara Reborn", "ARB");
  }
}

module.exports = VedalkenGhoul;
