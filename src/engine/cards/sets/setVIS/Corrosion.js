"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Corrosion extends UnimplementedCard {
  constructor (game) {
    super(game, "Corrosion", "Visions", "VIS");
  }
}

module.exports = Corrosion;
