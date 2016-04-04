"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArchetypeofCourage extends Card {
  constructor(game) {
    super(game, "Archetype of Courage", "Born of the Gods", "BNG");
  }
}

module.exports = ArchetypeofCourage;
