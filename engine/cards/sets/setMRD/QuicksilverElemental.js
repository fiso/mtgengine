"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Elemental", "Mirrodin", "MRD");
  }
}

module.exports = QuicksilverElemental;
