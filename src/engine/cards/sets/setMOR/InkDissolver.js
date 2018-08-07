"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InkDissolver extends UnimplementedCard {
  constructor (game) {
    super(game, "Ink Dissolver", "Morningtide", "MOR");
  }
}

module.exports = InkDissolver;
