"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianLieutenant extends UnimplementedCard {
  constructor(game) {
    super(game, "Ramosian Lieutenant", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianLieutenant;
