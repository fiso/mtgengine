"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TalonofPain extends UnimplementedCard {
  constructor (game) {
    super(game, "Talon of Pain", "Darksteel", "DST");
  }
}

module.exports = TalonofPain;
