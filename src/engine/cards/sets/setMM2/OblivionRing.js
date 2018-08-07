"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OblivionRing extends UnimplementedCard {
  constructor (game) {
    super(game, "Oblivion Ring", "Modern Masters 2015", "MM2");
  }
}

module.exports = OblivionRing;
