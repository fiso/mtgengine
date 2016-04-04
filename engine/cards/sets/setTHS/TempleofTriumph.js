"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TempleofTriumph extends UnimplementedCard {
  constructor(game) {
    super(game, "Temple of Triumph", "Theros", "THS");
  }
}

module.exports = TempleofTriumph;
