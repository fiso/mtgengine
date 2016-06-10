"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrizzlyBears extends UnimplementedCard {
  constructor (game) {
    super(game, "Grizzly Bears", "Classic Sixth Edition", "6ED");
  }
}

module.exports = GrizzlyBears;
