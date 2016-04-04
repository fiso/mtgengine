"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlackerLotus extends UnimplementedCard {
  constructor(game) {
    super(game, "Blacker Lotus", "Unglued", "UGL");
  }
}

module.exports = BlackerLotus;
