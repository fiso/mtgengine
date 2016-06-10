"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LoamDweller extends UnimplementedCard {
  constructor (game) {
    super(game, "Loam Dweller", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = LoamDweller;
