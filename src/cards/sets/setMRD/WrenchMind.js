"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WrenchMind extends UnimplementedCard {
  constructor (game) {
    super(game, "Wrench Mind", "Mirrodin", "MRD");
  }
}

module.exports = WrenchMind;
