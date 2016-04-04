"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverDagger extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Dagger", "Apocalypse", "APC");
  }
}

module.exports = QuicksilverDagger;
