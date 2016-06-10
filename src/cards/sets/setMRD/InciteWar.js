"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InciteWar extends UnimplementedCard {
  constructor (game) {
    super(game, "Incite War", "Mirrodin", "MRD");
  }
}

module.exports = InciteWar;
