"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RichardGarfieldPhD extends UnimplementedCard {
  constructor (game) {
    super(game, "Richard Garfield, Ph.D.", "Unhinged", "UNH");
  }
}

module.exports = RichardGarfieldPhD;
