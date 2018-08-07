"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeadeyeQuartermaster extends UnimplementedCard {
  constructor (game) {
    super(game, "Deadeye Quartermaster", "Ixalan", "XLN");
  }
}

module.exports = DeadeyeQuartermaster;
