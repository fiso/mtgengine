"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mindslaver extends UnimplementedCard {
  constructor (game) {
    super(game, "Mindslaver", "Mirrodin", "MRD");
  }
}

module.exports = Mindslaver;
