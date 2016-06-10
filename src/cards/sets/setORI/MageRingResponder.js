"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MageRingResponder extends UnimplementedCard {
  constructor (game) {
    super(game, "Mage-Ring Responder", "Magic Origins", "ORI");
  }
}

module.exports = MageRingResponder;
