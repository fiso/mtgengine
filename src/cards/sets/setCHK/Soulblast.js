"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Soulblast extends UnimplementedCard {
  constructor(game) {
    super(game, "Soulblast", "Champions of Kamigawa", "CHK");
  }
}

module.exports = Soulblast;
