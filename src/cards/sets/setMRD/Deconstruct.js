"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Deconstruct extends UnimplementedCard {
  constructor (game) {
    super(game, "Deconstruct", "Mirrodin", "MRD");
  }
}

module.exports = Deconstruct;
