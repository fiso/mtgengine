"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WuInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Wu Infantry", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = WuInfantry;
