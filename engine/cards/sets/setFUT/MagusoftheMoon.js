"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MagusoftheMoon extends UnimplementedCard {
  constructor(game) {
    super(game, "Magus of the Moon", "Future Sight", "FUT");
  }
}

module.exports = MagusoftheMoon;
