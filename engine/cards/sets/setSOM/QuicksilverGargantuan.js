"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverGargantuan extends UnimplementedCard {
  constructor(game) {
    super(game, "Quicksilver Gargantuan", "Scars of Mirrodin", "SOM");
  }
}

module.exports = QuicksilverGargantuan;
