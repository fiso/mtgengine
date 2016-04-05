"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoarofJukai extends UnimplementedCard {
  constructor(game) {
    super(game, "Roar of Jukai", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = RoarofJukai;
