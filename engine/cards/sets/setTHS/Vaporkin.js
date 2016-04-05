"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vaporkin extends UnimplementedCard {
  constructor(game) {
    super(game, "Vaporkin", "Theros", "THS");
  }
}

module.exports = Vaporkin;
