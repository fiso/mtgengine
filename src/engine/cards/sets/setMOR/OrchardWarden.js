"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrchardWarden extends UnimplementedCard {
  constructor (game) {
    super(game, "Orchard Warden", "Morningtide", "MOR");
  }
}

module.exports = OrchardWarden;
