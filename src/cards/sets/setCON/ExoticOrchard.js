"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExoticOrchard extends UnimplementedCard {
  constructor (game) {
    super(game, "Exotic Orchard", "Conflux", "CON");
  }
}

module.exports = ExoticOrchard;
