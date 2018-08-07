"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoaroftheCrowd extends UnimplementedCard {
  constructor (game) {
    super(game, "Roar of the Crowd", "Morningtide", "MOR");
  }
}

module.exports = RoaroftheCrowd;
