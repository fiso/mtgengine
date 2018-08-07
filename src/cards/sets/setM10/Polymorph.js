"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Polymorph extends UnimplementedCard {
  constructor (game) {
    super(game, "Polymorph", "Magic 2010", "M10");
  }
}

module.exports = Polymorph;
