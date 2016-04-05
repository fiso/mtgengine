"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Disorient extends UnimplementedCard {
  constructor(game) {
    super(game, "Disorient", "Magic 2010", "M10");
  }
}

module.exports = Disorient;
