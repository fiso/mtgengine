"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SeaEagle extends UnimplementedCard {
  constructor (game) {
    super(game, "Sea Eagle", "Eighth Edition", "8ED");
  }
}

module.exports = SeaEagle;
