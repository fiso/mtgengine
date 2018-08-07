"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuneBeetle extends UnimplementedCard {
  constructor (game) {
    super(game, "Dune Beetle", "Amonkhet", "AKH");
  }
}

module.exports = DuneBeetle;
