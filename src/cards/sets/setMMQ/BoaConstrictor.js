"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BoaConstrictor extends UnimplementedCard {
  constructor (game) {
    super(game, "Boa Constrictor", "Mercadian Masques", "MMQ");
  }
}

module.exports = BoaConstrictor;
