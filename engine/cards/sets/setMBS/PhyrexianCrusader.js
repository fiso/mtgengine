"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianCrusader extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Crusader", "Mirrodin Besieged", "MBS");
  }
}

module.exports = PhyrexianCrusader;
