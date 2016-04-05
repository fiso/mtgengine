"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class InescapableBrute extends UnimplementedCard {
  constructor(game) {
    super(game, "Inescapable Brute", "Shadowmoor", "SHM");
  }
}

module.exports = InescapableBrute;
