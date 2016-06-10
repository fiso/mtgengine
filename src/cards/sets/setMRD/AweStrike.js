"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AweStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Awe Strike", "Mirrodin", "MRD");
  }
}

module.exports = AweStrike;
