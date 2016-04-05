"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PyromancersGoggles extends UnimplementedCard {
  constructor(game) {
    super(game, "Pyromancer's Goggles", "Magic Origins", "ORI");
  }
}

module.exports = PyromancersGoggles;
