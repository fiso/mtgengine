"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WhirlwindAdept extends UnimplementedCard {
  constructor(game) {
    super(game, "Whirlwind Adept", "Khans of Tarkir", "KTK");
  }
}

module.exports = WhirlwindAdept;
