"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PierceStrider extends UnimplementedCard {
  constructor (game) {
    super(game, "Pierce Strider", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PierceStrider;
