"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PricklyBoggart extends UnimplementedCard {
  constructor (game) {
    super(game, "Prickly Boggart", "Morningtide", "MOR");
  }
}

module.exports = PricklyBoggart;
