"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesperGhoul extends UnimplementedCard {
  constructor (game) {
    super(game, "Vesper Ghoul", "Dissension", "DIS");
  }
}

module.exports = VesperGhoul;
