"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianSergeant extends UnimplementedCard {
  constructor(game) {
    super(game, "Ramosian Sergeant", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianSergeant;
