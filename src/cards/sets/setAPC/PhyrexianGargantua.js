"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhyrexianGargantua extends UnimplementedCard {
  constructor(game) {
    super(game, "Phyrexian Gargantua", "Apocalypse", "APC");
  }
}

module.exports = PhyrexianGargantua;
