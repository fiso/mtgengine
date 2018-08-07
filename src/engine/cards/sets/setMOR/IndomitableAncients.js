"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IndomitableAncients extends UnimplementedCard {
  constructor (game) {
    super(game, "Indomitable Ancients", "Morningtide", "MOR");
  }
}

module.exports = IndomitableAncients;
