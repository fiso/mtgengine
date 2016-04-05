"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Triskelavus extends UnimplementedCard {
  constructor(game) {
    super(game, "Triskelavus", "Magic: The Gathering-Commander", "CMD");
  }
}

module.exports = Triskelavus;
