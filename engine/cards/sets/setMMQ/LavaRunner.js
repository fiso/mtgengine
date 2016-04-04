"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LavaRunner extends UnimplementedCard {
  constructor(game) {
    super(game, "Lava Runner", "Mercadian Masques", "MMQ");
  }
}

module.exports = LavaRunner;
