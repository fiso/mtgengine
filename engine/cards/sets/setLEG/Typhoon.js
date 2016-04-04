"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Typhoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Typhoon", "Legends", "LEG");
  }
}

module.exports = Typhoon;
