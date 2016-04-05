"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MisersCage extends UnimplementedCard {
  constructor(game) {
    super(game, "Misers' Cage", "Mirage", "MIR");
  }
}

module.exports = MisersCage;
