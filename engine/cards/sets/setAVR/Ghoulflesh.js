"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ghoulflesh extends UnimplementedCard {
  constructor(game) {
    super(game, "Ghoulflesh", "Avacyn Restored", "AVR");
  }
}

module.exports = Ghoulflesh;
