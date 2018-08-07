"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterFeud extends UnimplementedCard {
  constructor (game) {
    super(game, "Bitter Feud", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = BitterFeud;
