"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExoticOrchard extends UnimplementedCard {
  constructor (game) {
    super(game, "Exotic Orchard", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = ExoticOrchard;
