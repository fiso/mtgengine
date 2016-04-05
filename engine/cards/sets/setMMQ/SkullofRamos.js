"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkullofRamos extends UnimplementedCard {
  constructor(game) {
    super(game, "Skull of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = SkullofRamos;
