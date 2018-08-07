"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrizzlyBears extends UnimplementedCard {
  constructor (game) {
    super(game, "Grizzly Bears", "Tenth Edition", "10E");
  }
}

module.exports = GrizzlyBears;
