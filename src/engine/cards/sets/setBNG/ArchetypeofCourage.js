"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArchetypeofCourage extends UnimplementedCard {
  constructor (game) {
    super(game, "Archetype of Courage", "Born of the Gods", "BNG");
  }
}

module.exports = ArchetypeofCourage;
