"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RamosianRally extends UnimplementedCard {
  constructor (game) {
    super(game, "Ramosian Rally", "Mercadian Masques", "MMQ");
  }
}

module.exports = RamosianRally;
