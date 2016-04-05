"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivinePresence extends UnimplementedCard {
  constructor(game) {
    super(game, "Divine Presence", "Invasion", "INV");
  }
}

module.exports = DivinePresence;
