"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvyElemental extends UnimplementedCard {
  constructor(game) {
    super(game, "Ivy Elemental", "Odyssey", "ODY");
  }
}

module.exports = IvyElemental;
