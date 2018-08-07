"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyUndeadHordeAwakens extends UnimplementedCard {
  constructor (game) {
    super(game, "My Undead Horde Awakens", "Archenemy", "ARC");
  }
}

module.exports = MyUndeadHordeAwakens;
