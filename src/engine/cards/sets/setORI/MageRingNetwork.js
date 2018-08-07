"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MageRingNetwork extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage-Ring Network", "Magic Origins", "ORI");
  }
}

module.exports = MageRingNetwork;
