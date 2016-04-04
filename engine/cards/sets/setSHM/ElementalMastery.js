"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElementalMastery extends UnimplementedCard {
  constructor(game) {
    super(game, "Elemental Mastery", "Shadowmoor", "SHM");
  }
}

module.exports = ElementalMastery;
