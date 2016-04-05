"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hex extends UnimplementedCard {
  constructor(game) {
    super(game, "Hex", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Hex;
