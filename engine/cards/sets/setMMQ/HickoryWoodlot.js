"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HickoryWoodlot extends UnimplementedCard {
  constructor(game) {
    super(game, "Hickory Woodlot", "Mercadian Masques", "MMQ");
  }
}

module.exports = HickoryWoodlot;
