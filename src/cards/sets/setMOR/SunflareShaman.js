"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SunflareShaman extends UnimplementedCard {
  constructor (game) {
    super(game, "Sunflare Shaman", "Morningtide", "MOR");
  }
}

module.exports = SunflareShaman;
