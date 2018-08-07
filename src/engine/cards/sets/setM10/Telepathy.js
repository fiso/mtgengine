"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Telepathy extends UnimplementedCard {
  constructor (game) {
    super(game, "Telepathy", "Magic 2010", "M10");
  }
}

module.exports = Telepathy;
