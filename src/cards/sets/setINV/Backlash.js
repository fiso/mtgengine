"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Backlash extends UnimplementedCard {
  constructor(game) {
    super(game, "Backlash", "Invasion", "INV");
  }
}

module.exports = Backlash;
