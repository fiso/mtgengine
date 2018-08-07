"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagmaGiant extends UnimplementedCard {
  constructor (game) {
    super(game, "Magma Giant", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MagmaGiant;
