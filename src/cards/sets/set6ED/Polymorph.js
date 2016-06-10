"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Polymorph extends UnimplementedCard {
  constructor (game) {
    super(game, "Polymorph", "Classic Sixth Edition", "6ED");
  }
}

module.exports = Polymorph;
