"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SungrassEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Sungrass Egg", "Odyssey", "ODY");
  }
}

module.exports = SungrassEgg;
