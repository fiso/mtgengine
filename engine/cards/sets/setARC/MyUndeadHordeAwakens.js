"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MyUndeadHordeAwakens extends Card {
  constructor(game) {
    super(game, "My Undead Horde Awakens", "Archenemy", "ARC");
  }
}

module.exports = MyUndeadHordeAwakens;
