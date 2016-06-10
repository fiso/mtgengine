"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SharedAnimosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Shared Animosity", "Morningtide", "MOR");
  }
}

module.exports = SharedAnimosity;
