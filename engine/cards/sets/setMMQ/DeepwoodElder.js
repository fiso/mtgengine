"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeepwoodElder extends UnimplementedCard {
  constructor(game) {
    super(game, "Deepwood Elder", "Mercadian Masques", "MMQ");
  }
}

module.exports = DeepwoodElder;
