"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KasimirtheLoneWolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Kasimir the Lone Wolf", "Legends", "LEG");
  }
}

module.exports = KasimirtheLoneWolf;
