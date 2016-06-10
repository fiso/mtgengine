"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Artillerize extends UnimplementedCard {
  constructor (game) {
    super(game, "Artillerize", "New Phyrexia", "NPH");
  }
}

module.exports = Artillerize;
