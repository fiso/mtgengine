"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BitterFeud extends UnimplementedCard {
  constructor(game) {
    super(game, "Bitter Feud", "Commander 2014", "C14");
  }
}

module.exports = BitterFeud;
