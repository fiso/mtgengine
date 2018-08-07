"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IvyElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Ivy Elemental", "Iconic Masters", "IMA");
  }
}

module.exports = IvyElemental;
