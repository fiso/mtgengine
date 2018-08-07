"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SacredCat extends UnimplementedCard {
  constructor (game) {
    super(game, "Sacred Cat", "Amonkhet", "AKH");
  }
}

module.exports = SacredCat;
