"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CatalystStone extends UnimplementedCard {
  constructor(game) {
    super(game, "Catalyst Stone", "Odyssey", "ODY");
  }
}

module.exports = CatalystStone;
