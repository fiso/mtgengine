"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Detritivore extends UnimplementedCard {
  constructor (game) {
    super(game, "Detritivore", "Planar Chaos", "PLC");
  }
}

module.exports = Detritivore;
