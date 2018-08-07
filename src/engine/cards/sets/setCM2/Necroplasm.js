"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Necroplasm extends UnimplementedCard {
  constructor (game) {
    super(game, "Necroplasm", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = Necroplasm;
