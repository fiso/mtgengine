"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Offalsnout extends UnimplementedCard {
  constructor (game) {
    super(game, "Offalsnout", "Morningtide", "MOR");
  }
}

module.exports = Offalsnout;
