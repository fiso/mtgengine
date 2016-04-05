"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SporeFrog extends UnimplementedCard {
  constructor(game) {
    super(game, "Spore Frog", "Prophecy", "PCY");
  }
}

module.exports = SporeFrog;
