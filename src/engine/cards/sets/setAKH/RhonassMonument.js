"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RhonassMonument extends UnimplementedCard {
  constructor (game) {
    super(game, "Rhonas's Monument", "Amonkhet", "AKH");
  }
}

module.exports = RhonassMonument;
