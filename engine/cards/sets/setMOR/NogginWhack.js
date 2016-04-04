"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NogginWhack extends UnimplementedCard {
  constructor(game) {
    super(game, "Noggin Whack", "Morningtide", "MOR");
  }
}

module.exports = NogginWhack;
