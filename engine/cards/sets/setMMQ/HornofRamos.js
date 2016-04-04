"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HornofRamos extends UnimplementedCard {
  constructor(game) {
    super(game, "Horn of Ramos", "Mercadian Masques", "MMQ");
  }
}

module.exports = HornofRamos;
