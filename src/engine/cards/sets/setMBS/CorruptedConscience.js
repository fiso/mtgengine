"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CorruptedConscience extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrupted Conscience", "Mirrodin Besieged", "MBS");
  }
}

module.exports = CorruptedConscience;
