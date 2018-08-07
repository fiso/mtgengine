"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CastOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Cast Out", "Amonkhet", "AKH");
  }
}

module.exports = CastOut;
