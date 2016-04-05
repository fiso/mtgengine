"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ImperialMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Imperial Mask", "Future Sight", "FUT");
  }
}

module.exports = ImperialMask;
