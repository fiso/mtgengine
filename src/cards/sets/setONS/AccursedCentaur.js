"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AccursedCentaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Accursed Centaur", "Onslaught", "ONS");
  }
}

module.exports = AccursedCentaur;
