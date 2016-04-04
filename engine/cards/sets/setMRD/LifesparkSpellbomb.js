"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LifesparkSpellbomb extends Card {
  constructor(game) {
    super(game, "Lifespark Spellbomb", "Mirrodin", "MRD");
  }
}

module.exports = LifesparkSpellbomb;
