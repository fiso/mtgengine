"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fabricate extends UnimplementedCard {
  constructor (game) {
    super(game, "Fabricate", "Magic 2010", "M10");
  }
}

module.exports = Fabricate;
