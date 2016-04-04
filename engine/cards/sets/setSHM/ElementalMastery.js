"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElementalMastery extends Card {
  constructor(game) {
    super(game, "Elemental Mastery", "Shadowmoor", "SHM");
  }
}

module.exports = ElementalMastery;
