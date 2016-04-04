"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SagesDousing extends UnimplementedCard {
  constructor(game) {
    super(game, "Sage's Dousing", "Morningtide", "MOR");
  }
}

module.exports = SagesDousing;
