"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullmeadCauldron extends UnimplementedCard {
  constructor (game) {
    super(game, "Skullmead Cauldron", "Dissension", "DIS");
  }
}

module.exports = SkullmeadCauldron;
