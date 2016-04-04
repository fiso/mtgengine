"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Earthbrawn extends UnimplementedCard {
  constructor(game) {
    super(game, "Earthbrawn", "Morningtide", "MOR");
  }
}

module.exports = Earthbrawn;
