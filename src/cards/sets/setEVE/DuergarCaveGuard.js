"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DuergarCaveGuard extends UnimplementedCard {
  constructor(game) {
    super(game, "Duergar Cave-Guard", "Eventide", "EVE");
  }
}

module.exports = DuergarCaveGuard;
