"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PhylacteryLich extends UnimplementedCard {
  constructor (game) {
    super(game, "Phylactery Lich", "Magic 2011", "M11");
  }
}

module.exports = PhylacteryLich;
