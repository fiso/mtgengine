"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class QuicksilverFountain extends UnimplementedCard {
  constructor (game) {
    super(game, "Quicksilver Fountain", "Mirrodin", "MRD");
  }
}

module.exports = QuicksilverFountain;
