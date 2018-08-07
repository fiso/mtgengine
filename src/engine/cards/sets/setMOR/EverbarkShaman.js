"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EverbarkShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Everbark Shaman", "Morningtide", "MOR");
  }
}

module.exports = EverbarkShaman;
